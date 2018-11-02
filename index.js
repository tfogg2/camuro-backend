const express = require('express')
const nodemailer = require('nodemailer')
const sgTransport = require('nodemailer-sendgrid-transport')
const bodyParser = require('body-parser')

const SERVER_CONFIGS = require('./constants/server');
const configureServer = require('./server');
const configureRoutes = require('./routes');
require('dotenv').config()

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const app = express()
const path = require('path')



app.use(express.static(path.join(__dirname, 'camuro/build')))

app.use(require('prerender-node'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/camuro/build/index.html'))
})

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

app.listen(SERVER_CONFIGS.PORT, error => {
  if (error) throw error;
  console.log('Server running on port: ' + SERVER_CONFIGS.PORT);
});

configureServer(app);
configureRoutes(app);


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

  client.sendMail({
    from: 'sender@camuro.co',
    to: 'camuro.co@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }, (err, info)=>{
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
