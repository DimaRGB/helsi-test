// vendor
import React, { Component, cloneElement } from 'react';
import { browserHistory } from 'react-router';

// helsi
import Select from 'components/Select/Select';
import parkingSystem from 'helpers/parkingSystem';

// own
import './App.css';


class App extends Component {

  state = {
    parkings: parkingSystem.getParkings()
  };

  componentDidMount() {
    window.parkingSystem = parkingSystem;
    window.addEventListener('storage', event => {
      if (event.storageArea === localStorage) {
        console.log(event);
      }
    }, false);
  }

  selectParking = event => {
    const parkingId = event.target.value;
    browserHistory.push(`/${parkingId}`);
  };

  render() {
    const { children, params } = this.props;
    const { parkings } = this.state;
    const options = parkings.map(({ id, name }) => ({ label: name, value: id }));
    return (
      <div className='App'>
        <div className='App__controls'>
          <label>Виберіть парковку:</label>
          <Select
            options={options}
            value={params.parkingId}
            onChange={this.selectParking}
          />
        </div>
        <div className='App__content'>
          {cloneElement(children, { parkings })}
        </div>
      </div>
    );
  }
}

export default App;
