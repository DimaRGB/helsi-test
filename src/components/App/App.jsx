// vendor
import React, { Component } from 'react';
import { browserHistory } from 'react-router';

// helsi
import Select from 'components/Select/Select';

// own
import './App.css';


class App extends Component {

  selectParking = event => {
    const parkingId = event.target.value;
    browserHistory.push(`/${parkingId}`);
  };

  render() {
    const { children, params } = this.props;
    const options = [
      { value: 0, label: 'parking A' },
      { value: 1, label: 'parking B' },
    ];
    return (
      <div className='App'>
        <div className='App__controls'>
          <label>Виберіть парковку:</label>
          <Select
            options={options}
            onChange={this.selectParking}
            defaultValue={params.parkingId}
          />
        </div>
        <div className='App__content'>
          {children}
        </div>
      </div>
    );
  }
}

export default App;
