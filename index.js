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


app.post('/sendEmail', (req, res) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message}`

  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'tfogg2@gmail.com',
    from: 'tfogg2@gmail.com',
    subject: 'New message from camuro offer form',
    text: content
  }

  sgMail.send(msg);

})
