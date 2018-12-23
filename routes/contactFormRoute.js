const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');

sgMail.setApiKey(keys.sendGridKey);

module.exports = app => {
  app.post('/api/sendmail', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log('Name: ', name);
    console.log('Email Address: ', email);
    console.log('Phone No.: ', phone);
    console.log('Mesaage Subject: ', subject);
    console.log('Message Content: ', message);
  });

  const msg = {
    to: 'slevin.glevra@gmail.com',
    from: 'test@example.com',
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };
  sgMail.send(msg);
};
