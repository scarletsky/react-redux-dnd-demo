import React, { Component } from 'react';
import { ToyTypes } from 'constants/index';
import ToysDNDManager from '../hoc/ToysDNDManager';

@ToysDNDManager(ToyTypes.COMPOSITION)
class Composition extends Component {

  render() {
    return (
      <table>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  }
}

export default Composition;
