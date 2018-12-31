import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Slider from './Slider';
import Location from './Location';
import ContactForm from './FormComponents/ContactForm';
import SocialMediaLinks from './SocialMediaLinks';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contact text-center">
        <Container>
          <Slider />
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
