module.exports = app => {
  app.post('/api/sendmail', (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log('Name: ', name);
    console.log('Email Address: ', email);
    console.log('Phone No.: ', phone);
    console.log('Mesaage Subject: ', subject);
    console.log('Message Content: ', message);
    res.send(`Message Sent Successfully`);
  });
};
