import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

const store = configureStore();
const root = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
