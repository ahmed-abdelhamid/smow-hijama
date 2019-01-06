import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withLocalize } from 'react-localize-redux';
import { renderToStaticMarkup } from 'react-dom/server';

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
    return (
      <BrowserRouter>
        <div>
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

export default withLocalize(App);
