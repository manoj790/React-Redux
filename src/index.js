import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './js/components/App';
import rootReducer from './js/reducers';

const store = createStore(rootReducer)

render (
  <Provider store = {store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
