import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withLocalize, Translate } from 'react-localize-redux';
import { Button } from 'reactstrap';

import translations from '../utils/translations/homepage.json';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(translations);
  }

  render() {
    return (
      <div className="homepage d-flex align-items-center">
        <div className="container text-white text-center">
          <h1>
            <Translate id="TITLE" />
          </h1>
          <p>
            <Translate id="SUBTITLE" />
          </p>
          <Button className="button" tag={Link} to="/contact" size="lg">
            <Translate id="CONTACT_US_BUTTON" />
          </Button>
        </div>
      </div>
    );
  }
}

export default withLocalize(HomePage);
