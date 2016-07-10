import React from 'react';
import { connect } from 'react-redux';
import { times } from 'lodash';
import Section from 'components/grids/Section';
import { sectionCounts } from 'constants/index';
import { addSection } from 'actions/index';
import { genPadId } from 'utils/index';
import { batchActions } from 'redux-batched-actions';

@connect((state, props) => ({
  sectionIds: state.sectionIds
}))
class Playground extends React.Component {

  componentWillMount() {
    this.props.dispatch(batchActions(
      times(sectionCounts).map(v => addSection({ id: genPadId(v+1) }))
    ));
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
