import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';

import ContactField from './ContactField';
import { FIELDS } from '../../fixtures/fields';
import { validate } from '../../utils/validateForm';

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
    <Form
      onSubmit={handleSubmit(values => {
        console.log(values);
      })}
    >
      {formFields}
      <div className="d-flex justify-content-center mb-3">
        <Button className="button--submit">Submit</Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: 'contactForm',
  validate
})(ContactForm);
