import React from 'react';
import { connect } from 'react-redux';
import Row from './Row';

@connect((state, props) => ({
  section: state.sections[props.id]
}))
class Section extends React.Component {
  render() {
    return (
      <div>
        <h3>Section {this.props.section.name}</h3>
        <table
          style={{
            borderCollapse: 'collapse',
            tableLayout: 'fixed'
          }}>
          <tbody>
            {this.props.section.rowIds.map((rowId, i) => <Row id={rowId} key={i} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Section;
