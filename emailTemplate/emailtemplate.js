module.exports = ({ name, phone, message }) => {
  return `
    <h1>A message from ${name}</h1>
    <p>Phone No.: ${phone}</p>
    <p>${message}</p>
  `;
};
