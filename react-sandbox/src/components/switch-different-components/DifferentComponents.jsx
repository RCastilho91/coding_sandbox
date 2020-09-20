import React from "react";

function DivOne(props) {
  return <div className="div-1">This is div 1
  <button className="backward-button">Back to div1</button>
  <button className="forward-button">Go to div2</button>
  </div>;
}

function DivTwo(props) {
  return <div className="div-2">This is div 2
  <button className="backward-button">Back to div1</button>
  <button className="forward-button">Go to div3</button>
  </div>;
}

function DivThree(props) {
  return <div className="div-3">This is div 3
  <button className="backward-button">Back to div2</button>
  </div>;
}

export { DivOne, DivTwo, DivThree };
