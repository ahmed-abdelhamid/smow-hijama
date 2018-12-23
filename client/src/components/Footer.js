import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import LangButtons from './LangButtons';

export default () => (
  <footer className="footer d-flex justify-content-around">
    <div className="text-center">
      <div className="footer__icon">
        <FontAwesomeIcon icon={faCopyright} size="sm" />
      </div>
      2018 Copyright: <a href="/">www.example.com</a>
    </div>
    <LangButtons />
  </footer>
);
