import React from 'react';

class Overlay extends React.Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0
        }} />
    );
  }
}

export default Overlay;
