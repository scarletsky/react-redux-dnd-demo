import React, { Component } from 'react';
import { capitalize, times, find, pick, isEqual } from 'lodash';
import Label from './Label';
import Input from './Input';
import Composition from './Composition';

class ToyWrapper extends Component {

  renderLabel(toy, restProps, draggable = true) {
    return <Label toy={toy} {...restProps} draggable={draggable} />;
  }

  renderInput(toy, restProps, draggable = true) {
    return <Input toy={toy} {...restProps} draggable={draggable} />;
  }

  renderComposition(composition, restProps, draggable = true) {
    const { grid, toys } = composition.props;

    function tryToRenderToy(i, j) {
      let test = find(toys, t => isEqual(t.position, [i, j]));
      return test ? this[`render${capitalize(test.type.toLowerCase())}`](test, restProps, false) : null;
    }

    return (
      <Composition
        draggable={draggable}
        toy={composition} >
        {times(grid.rows, (i) => {
          return (
            <tr key={i}>
              {times(grid.cols, (j) => {
                return (
                  <td key={j}>
                    {tryToRenderToy.bind(this)(i+1, j+1)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </Composition>
    );
  }

  render() {

    const { toy } = this.props;
    const toyType = capitalize(toy.type.toLowerCase());
    const restProps = pick(this.props, ['id', 'dispatch']);

    return (
      <div
        style={{
          position: 'relative'
        }}>
        {this[`render${toyType}`].bind(this)(toy, restProps)}
      </div>
    );
  }

}

export default ToyWrapper;
