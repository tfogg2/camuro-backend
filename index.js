const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'camuro/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/camuro/build/index.html'));
});


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
    host = host.replace(/^www\./i, '');
    href = protocol + host + req.url;
    res.statusCode = 301;
    res.setHeader('Location', href);
    res.write('Redirecting to ' + host + req.url + '');
    res.end();
});

if(process.env.NODE_ENV === 'production'){
  auth = process.env
}
else{
  auth = require('./config.json')
}

//This middleware allows our server routes to have parsed json data from the client
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());

const port = process.env.PORT || 5000;
app.listen(port);



var transport = {
  service: 'Sendgrid',
  auth: {
    user: auth.SENDGRID_USERNAME,
    pass: auth.SENDGRID_PASSWORD
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.post('/sendEmail', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message}`


  transporter.sendMail({
    from: name,
    to: 'tfogg2@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  },(err, info) => {
    if(err){
      res.send(err)
    }
    else{
      res.status(200).json({
        success: true,
        message: 'Email Sent'
      })
    }
  }
)
