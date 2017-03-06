// vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

// own
import './index.css';
import Router from './router';


ReactDOM.render(
  <Router history={browserHistory} />,
  document.getElementById('root')
);
