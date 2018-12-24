import React, { Component } from 'react';
import { withLocalize, Translate } from 'react-localize-redux';

import LangButtons from './LangButtons';
import translations from '../utils/translations/footer.json';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(translations);
  }

  render() {
    return (
      <footer className=" footer text-center py-2">
        <Translate id="COPYRIGHTS" />
        <LangButtons />
      </footer>
    );
  }
}

export default withLocalize(Footer);
