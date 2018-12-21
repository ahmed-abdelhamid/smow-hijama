import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';

import ContactField from './ContactField';
import { FIELDS } from '../../fixtures/fields';
import axios from 'axios';
import { validate } from '../../utils/contactFormFunctions';

class ContactForm extends Component {
  state = { response: '' };

  submitContactForm = async values => {
    const response = await axios.post('/api/sendmail', values);
    const { data } = await response;
    this.setState({ response: data });
  };

  renderFormFields = () =>
    FIELDS.map(({ label, type, name, id, placeholder, rows = undefined }) => (
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
    ));

  render() {
    const { handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(this.submitContactForm)}>
        {this.renderFormFields()}
        <div className="d-flex justify-content-center mb-3">
          <Button className="button--submit">Submit</Button>
        </div>{' '}
        {this.state.response && <p>{this.state.response}</p>}
      </Form>
    );
  }
}

export default reduxForm({
  form: 'contactForm',
  validate
})(ContactForm);
