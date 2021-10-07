import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Provider } from 'react-redux';
import CounterStore from './stores/counter';

ReactDOM.render(
  <Provider store={CounterStore}>
    <App />
  </Provider>,
  document.getElementById('root'));