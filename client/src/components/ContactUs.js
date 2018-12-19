import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Slider from './Slider';
import Location from './Location';
import ContactForm from './FormComponents/ContactForm';
import SocialMediaLinks from './SocialMediaLinks';

export default class ContactUs extends Component {
  submit = values => {
    console.log(values);
  };

  render() {
    return (
      <div className="contact text-center">
        <Slider />
        <Container className="py-5">
          <h2 className="mb-4">Contact Us</h2>
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
