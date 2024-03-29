import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withLocalize } from 'react-localize-redux';
import { renderToStaticMarkup } from 'react-dom/server';

import LangButtons from './LangButtons';
import HomePage from './HomePage';
import ContactUs from './ContactUs';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.initialize({
      languages: [
        { name: 'العربية', code: 'ar' },
        { name: 'English', code: 'en' }
      ],
      options: { renderToStaticMarkup, renderInnerHtml: true }
    });
  }

  render() {
    const { activeLanguage } = this.props;
    const dir = activeLanguage === 'arabic' ? 'rtl' : 'ltr';
    const font = activeLanguage === 'arabic' ? 'arabic-font' : '';
    return (
      <BrowserRouter>
        <div dir={dir} className={font}>
          <LangButtons />
          <Switch>
            <Route path="/" component={HomePage} exact={true} />
            <Route path="/contact" component={ContactUs} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ activeLanguage }) => ({
  activeLanguage
});

export default connect(mapStateToProps)(withLocalize(App));
