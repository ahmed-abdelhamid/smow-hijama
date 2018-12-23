import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ContactUs from './ContactUs';
import Footer from './Footer';

const App = () => (
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

export default App;
