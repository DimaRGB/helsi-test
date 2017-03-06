// vendor
import React, { Component, PropTypes } from 'react';

// own
import './Select.css';


export default class Select extends Component {

  static propTypes = {
    options: PropTypes.array,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  };

  static defaultProps = {
    options: [],
    placeholder: 'Select',
    value: '',
  };

  renderOptions(options) {
    return options.map(option =>
      <option key={option.value} value={option.value}>{option.label}</option>
    );
  }

  render() {
    const { placeholder, options, ...props } = this.props;
    return (
      <select {...props}>
        <option value='' disabled hidden>{placeholder}</option>
        {this.renderOptions(options)}
      </select>
    );
  }
}
