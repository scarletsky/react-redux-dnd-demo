import React from 'react';
import ToysDNDManager from '../hoc/ToysDNDManager';
import { ToyTypes } from 'constants/index';

@ToysDNDManager(ToyTypes.INPUT)
class MyInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.value}
        placeholder={this.props.placeholder}
        style={{ width: 98, maxWidth: 98 }} />
    );
  }
}

export default MyInput;
