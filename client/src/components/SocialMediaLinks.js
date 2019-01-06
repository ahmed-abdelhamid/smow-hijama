import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faHome,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { withLocalize, Translate } from 'react-localize-redux';

import translations from '../utils/translations/contact-us.json';

const LINKS = [
  { href: 'https://twitter.com/SMACC200', icon: faTwitter },
  { href: 'https://www.instagram.com/hijamah_center/', icon: faInstagram }
];

const SECTIONS = [
  { id: '1', icon: faHome, title: 'VISIT_US', content: 'VISIT_US_DETAIL' },
  { id: '2', icon: faEnvelope, title: 'EMAIL_US', content: 'EMAIL_ADDRESS' },
  { id: '3', icon: faPhone, title: 'CALL_US', content: 'PHONE_NO' },
  { id: '4', icon: faClock, title: 'WORK_HOURS_TITLE', content: 'WORK_HOURS' }
];

class SocialMediaLinks extends Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(translations);
  }

  render() {
    const icons = LINKS.map(({ href, icon }) => (
      <a key={href} href={href} className="d-inline-block px-2 social-link">
        <FontAwesomeIcon icon={icon} size="1x" />
      </a>
    ));

    const socialSections = SECTIONS.map(({ id, icon, title, content }) => (
      <Col
        md="6"
        key={id}
        className="d-flex align-items-start pb-3 bg-transparent"
      >
        <FontAwesomeIcon
          className="d-inline-block mx-3"
          icon={icon}
          size="3x"
        />
        <span className="d-inline-block text-left">
          <Translate id={title} />
          <br />
          <Translate id={content} />
        </span>
      </Col>
    ));

    return (
      <div className="grey">
        <Row>{socialSections}</Row>
        <div className="pb-5">
          <Translate id="FOLLOW_US" />
          {icons}
        </div>
      </div>
    );
  }
}

export default withLocalize(SocialMediaLinks);
