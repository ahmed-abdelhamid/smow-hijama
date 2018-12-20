module.exports = app => {
  app.post('/api/sendmail', (req, res) => {
    console.log('Request: ', req);
    console.log('Respond: ', res);
  });
};
