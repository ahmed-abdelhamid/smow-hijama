const sgMail = require('@sendgrid/mail');
const keys = require('../config/keys');
const emailTemplates = require('../emailTemplate/emailtemplate');

sgMail.setApiKey(keys.sendGridKey);

module.exports = app => {
  app.post('/api/sendmail', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    const text = `Message from ${name} with phone No. ${phone}: ${message}`;
    const emailTemplate = { name, phone, message };

    const msg = {
      to: 'slevin.glevra@gmail.com',
      from: email,
      subject: subject,
      text,
      html: emailTemplates(emailTemplate)
    };
    sgMail
      .send(msg)
      .then(() => res.send('Message Sent Successfully.'))
      .catch(error => {
        const { code } = error;
        res.sendStatus(code);
      });
  });
};
