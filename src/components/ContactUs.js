import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Slider from './Slider';
import Location from './Location';
import ContactForm from './ContactForm';

export default class ContactUs extends Component {
  render() {
    return (
      <div className="contact text-center">
        <Slider />
        <Container className="py-5">
          <h2 className="mb-4">Contact Us</h2>
          <Row>
            <Col md="6">
              <div>
                <Location />
              </div>
              <div>Address Details</div>
            </Col>
            <Col md="6">
              <div>
                <ContactForm />
              </div>
              <div>Social media Links is Here</div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
