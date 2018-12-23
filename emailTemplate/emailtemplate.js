module.exports = ({ name, phone, message }) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
        <h1>Message From ${name}</h1>
        <h3>Phone No.: ${phone}</h3>
        <p>${message}</p>  
        </div>
      </body>
    </html>
  `;
};
