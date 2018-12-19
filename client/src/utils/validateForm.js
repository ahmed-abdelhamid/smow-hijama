export const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Please Enter Your Name';
  }
  if (!values.email) {
    errors.email = 'Please Enter Your Email Address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }
  if (!values.phone) {
    errors.phone = 'Please Enter Your Phone No.';
  } else if (
    isNaN(Number(values.phone)) ||
    !/^05[0-9]{8}$/.test(values.phone)
  ) {
    errors.phone = 'Please Enter a Valid Phone No. Like: 05XXXXXXXX';
  }
  if (!values.subject) {
    errors.subject = 'Please Enter a Subject For Your Message';
  }
  if (!values.message) {
    errors.message = 'Please Enter Your Message';
  }
  return errors;
};
