import React from 'react';
import './App.css';
import DraggableDiv from './components/draggable-divs/Draggable';
import NewDivButton from './components/draggable-divs/NewDivButton';

function App() {

  return (
    <div className="App">
      <DraggableDiv />
      <NewDivButton />
    </div>
  );
}

export default App;
