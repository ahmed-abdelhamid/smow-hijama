import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withLocalize, Translate } from 'react-localize-redux';
import { renderToStaticMarkup } from 'react-dom/server';

import Slider from './Slider';
import Location from './Location';
import ContactForm from './FormComponents/ContactForm';
import SocialMediaLinks from './SocialMediaLinks';
import translations from '../utils/translations/contact-us.json';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: 'العربية', code: 'ar' },
        { name: 'English', code: 'en' }
      ],
      options: { renderToStaticMarkup }
    });
    this.props.addTranslation(translations);
  }

  render() {
    return (
      <div className="contact text-center">
        <Container>
          <Slider />
          <h2 className="mb-4 contact__title">
            <Translate id="TITLE" />
          </h2>
          <Row>
            <Col md="6">
              <Location />
              <SocialMediaLinks />
            </Col>
            <Col md="6">
              <div>
                <ContactForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withLocalize(ContactUs);
