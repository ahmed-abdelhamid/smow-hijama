import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'reactstrap';

import ContactField from './ContactField';
import SubmitButton from './SubmitButton';
import { FIELDS } from '../../fixtures/fields';
import { validate, submitContactForm } from '../../utils/contactFormFunctions';

const ContactForm = ({ handleSubmit }) => {
  const formFields = FIELDS.map(
    ({ label, type, name, id, placeholder, rows = undefined }) => (
      <Field
        key={id}
        label={label}
        component={ContactField}
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        rows={rows}
        required
      />
    )
  );
  return (
    <Form onSubmit={handleSubmit}>
      {formFields}
      <SubmitButton />
    </Form>
  );
};

export default reduxForm({
  form: 'contactForm',
  validate,
  onSubmit: submitContactForm
})(ContactForm);
