import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Playground from './Playground';
import ToysList from './ToysList';

@DragDropContext(HTML5Backend)
class App extends React.Component {

  render() {
    return (
      <div>
        <Playground />
        <ToysList />
      </div>
    );
  }

};

export default App;
