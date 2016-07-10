import React from 'react';
import { connect } from 'react-redux';
import Section from 'components/grids/Section';
import { addSection } from 'actions/index';

@connect((state, props) => ({
  sectionIds: state.sectionIds
}))
class Playground extends React.Component {

  componentWillMount() {
    this.props.dispatch(addSection({ id: '01' }));
  }

  render() {
    return (
      <div
        style={{
          width: '80%'
        }}>
        {this.props.sectionIds.map((sectionId, i) => <Section id={sectionId} key={i} />)}
      </div>
    );
  }
}

export default Playground;
