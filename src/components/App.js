import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import ContactUs from './ContactUs';

const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
