// vendor
import React from 'react';
import { Router, Route } from 'react-router';

// helsi
import App from './components/App/App';
import Parking from './components/Parking/Parking';


export default props => (
  <Router {...props}>
    <Route path='/' component={App}>
      <Route path='/:parkingId' component={Parking} />
    </Route>
  </Router>
);
