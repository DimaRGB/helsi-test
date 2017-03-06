// vendor
import React, { Component } from 'react';

// own
import './Parking.css';


export default class Parking extends Component {

  getParking = ({ params: { parkingId }, parkings }) => parkings[parkingId];

  constructor(props) {
    super(props);
    this.state = {
      parking: this.getParking(props)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      parking: this.getParking(nextProps)
    });
  }

  render() {
    const { parking } = this.state;
    return (
      <div>
        {JSON.stringify(parking)}
      </div>
    );
  }
}
