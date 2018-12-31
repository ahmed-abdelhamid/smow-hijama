import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'reactstrap';
import { withLocalize, Translate } from 'react-localize-redux';
import axios from 'axios';

import ContactField from './ContactField';
import { FIELDS } from '../../fixtures/fields';
import { validate } from '../../utils/contactFormFunctions';
import translations from '../../utils/translations/contact-us.json';

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = { response: '', error: '' };
    this.props.addTranslation(translations);
  }

  submitContactForm = async values => {
    try {
      const { data } = await axios.post('/api/sendmail', values);
      this.setState({ response: data });
    } catch (err) {
      const error =
        'Message not sent, Something went wrong. Please try to submit again later.';
      this.setState({ error });
    }
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
          <Button className="button">
            <Translate id="SUBMIT_BUTTON" />
          </Button>
        </div>{' '}
        {this.state.response && (
          <p className="text-success">{this.state.response}</p>
        )}
        {this.state.error && <p className="text-danger">{this.state.error}</p>}
      </Form>
    );
  }
}

const localizedForm = withLocalize(ContactForm);

export default reduxForm({
  form: 'contactForm',
  validate
})(localizedForm);
