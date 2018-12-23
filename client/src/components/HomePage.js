import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withLocalize, Translate } from 'react-localize-redux';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button, Container } from 'reactstrap';

import translations from '../utils/translations/homepage.json';

class HomePage extends Component {
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
      <div>
        <div className="homepage d-flex align-items-center">
          <div className="container text-white text-center">
            <h1>
              <Translate id="TITLE">مركز سمو الحياة للحجامة</Translate>
            </h1>
            <p>
              <Translate id="SUBTITLE">
                مرحبا بكم فى مركز سمو الحياة للحجامة
              </Translate>
            </p>
            <Button tag={Link} to="/contact" size="lg">
              <Translate id="CONTACT_US_BUTTON">اتصل بنا</Translate>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withLocalize(HomePage);
