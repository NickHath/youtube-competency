import React from 'react';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './store';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  // COMP 42D
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  , document.getElementById('root'));
registerServiceWorker();
