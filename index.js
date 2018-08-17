const express = require('express')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const sgMail = require('@sendgrid/mail')
const bodyParser = require('body-parser')
const app = express()
const path = require('path')

require('dotenv').config()

app.use(express.static(path.join(__dirname, 'camuro/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/camuro/build/index.html'))
})


//REDIRECT www.domain.com TO domain.com
app.get ('/*', function (req, res, next){
    var protocol = 'http' + (req.connection.encrypted ? 's' : '') + '://'
      , host = req.headers.host
      , href
      ;

    // no www. present, nothing to do here
    if (!/^www\./i.test(host)) {
      next();
      return;
    }

    // remove www.
    host = host.replace(/^www\./i, '')
    href = protocol + host + req.url
    res.statusCode = 301
    res.setHeader('Location', href)
    res.write('Redirecting to ' + host + req.url + '')
    res.end()
});

if(process.env.NODE_ENV === 'production'){
  auth = process.env
}
else{
  auth = require('./config.json')
}


//This middleware allows our server routes to have parsed json data from the client
app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.text())

const port = process.env.PORT || 5000
app.listen(port)



var client = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: auth.SENDGRID_USERNAME,
    pass: auth.SENDGRID_PASSWORD
  }
})


app.post('/sendEmail', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message}`


  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const msg = {
    to: 'tfogg2@gmail.com',
    from: 'sender@camuro.co',
    subject: 'New message from camuro offer form',
    text: content
  }

  sgMail.send(msg, (err, info)=>{
    if(err){
      res.send(err)
    }
    else{
      res.status(200).json({
        success: true,
        message: 'Email Sent',
        name: name,
        text: content
      })
    }
  })
})
