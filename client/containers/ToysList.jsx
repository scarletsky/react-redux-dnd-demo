import React from 'react';
import { connect } from 'react-redux';
import ToyWrapper from 'components/toys/ToyWrapper';

@connect(state => ({
  toysList: state.toysList
}))
class ToysList extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '20%',
          height: '100%',
          position: 'fixed',
          top: 0,
          right: 0
        }}>
        {this.props.toysList.map((t, i) => <ToyWrapper key={i} toy={t} />)}
      </div>
    );
  }
}

export default ToysList;
