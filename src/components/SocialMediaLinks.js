import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faSnapchat,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

const LINKS = [
  { href: '/', icon: faFacebookF },
  { href: '/', icon: faTwitter },
  { href: '/', icon: faSnapchat },
  { href: '/', icon: faInstagram }
];

export default class SocialMediaLinks extends Component {
  render() {
    const icons = LINKS.map(({ href, icon }) => (
      <a key={icon} href={href} className="d-inline-block px-2">
        <FontAwesomeIcon icon={icon} size="1x" />
      </a>
    ));

    return (
      <div>
        <p>
          Contact us on:
          {icons}
        </p>
        <p>
          Call us on:
          <span className="d-inline-block px-2">
            <FontAwesomeIcon icon={faPhone} size="1x" />
          </span>
          +999999999
        </p>
      </div>
    );
  }
}
