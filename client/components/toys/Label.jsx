import React from 'react';
import ToysDNDManager from '../hoc/ToysDNDManager';
import { ToyTypes } from 'constants/index';

@ToysDNDManager(ToyTypes.LABEL)
class MyInput extends React.Component {
  render() {
    return (
      <p>{ this.props.label }</p>
    );
  }
}

export default MyInput;
