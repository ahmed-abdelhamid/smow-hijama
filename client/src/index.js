import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocalizeProvider } from 'react-localize-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

const store = createStore(reducers, {}, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <LocalizeProvider>
      <App />
    </LocalizeProvider>
  </Provider>,
  document.getElementById('root')
);
