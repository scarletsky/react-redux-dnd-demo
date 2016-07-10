import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

@connect((state, props) => ({
  row: state.rows[props.id]
}))
class Row extends React.Component {
  render() {
    return (
      <tr>
        {this.props.row.cellIds.map((cellId, i) => <Cell id={cellId} key={i} />)}
      </tr>
    );
  }
}

export default Row;
