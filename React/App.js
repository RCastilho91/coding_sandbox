import React from 'react';
import './App.css';
import { blueDiv, greenDiv, grayDiv } from './components/skipping-divs/SkippingDivs'

function App() {
  return (
    <div className="App">
      <blueDiv />
      <greenDiv />
      <grayDiv />
    </div>
  );
}

export default App;
