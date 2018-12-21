import React, { Component } from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { Form } from 'reactstrap';

import ContactField from './ContactField';
import SubmitButton from './SubmitButton';
import { FIELDS } from '../../fixtures/fields';
import { validate, submitContactForm } from '../../utils/contactFormFunctions';

class ContactForm extends Component {
  state = { response: '' };

  handleClick = dispatch => {
    const data = dispatch(submit('contactForm'));
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
      <Form onSubmit={handleSubmit}>
        {this.renderFormFields()}
        <SubmitButton handleClick={this.handleClick} />
      </Form>
    );
  }
}

export default reduxForm({
  form: 'contactForm',
  validate,
  onSubmit: submitContactForm
})(ContactForm);
