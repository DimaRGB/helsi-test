// vendor
import React, { Component } from 'react';

// own
import './Parking.css';


export default class Parking extends Component {

  render() {
    const { params: { parkingId } } = this.props;
    return (
      <div>
        {parkingId}
      </div>
    );
  }
}
