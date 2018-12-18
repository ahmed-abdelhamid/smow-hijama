import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const LINKS = [
  { href: 'https://twitter.com/SMACC200', icon: faTwitter },
  { href: 'https://www.instagram.com/hijamah_center/', icon: faInstagram }
];

export default class SocialMediaLinks extends Component {
  render() {
    const icons = LINKS.map(({ href, icon }) => (
      <a key={href} href={href} className="d-inline-block px-2 grey">
        <FontAwesomeIcon icon={icon} size="1x" />
      </a>
    ));

    return (
      <div>
        <div>
          Contact us on:
          {icons}
        </div>
        <div>Or</div>
        <div className="d-flex justify-content-center align-items-center">
          <Row>
            <Col md="6">
              Call us on
              <span className="d-inline-block px-2">
                <FontAwesomeIcon icon={faPhone} size="1x" />
              </span>
              :
            </Col>
            <Col md="6">
              <div>+966&nbsp;555101483</div>
              <div>+966&nbsp;555101486</div>
              <div>+966&nbsp;545570507</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
