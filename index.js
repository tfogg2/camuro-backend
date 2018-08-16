const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();
const app = express();
const path = require('path');

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

const port = process.env.PORT || 5000;
app.listen(port);



var transport = {
  host: process.env.DB_HOST,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
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

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message}`


  var mail = {
    from: name,
    to: 'tfogg2@gmail.com',
    subject: 'New Message from Contact Form',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

module.exports = router;
