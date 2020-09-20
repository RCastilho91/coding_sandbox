import React from "react";
import "./styles.css";

function StandardDiv(props) {
  return (
    <div className="initial-div">
      Hello there. This is the initial div.
      <div className="div-controls">
        <button onClick={props.switchCaller("div1")}>Go to div1</button>
      </div>
    </div>
  );
}

function DivOne(props) {
  return (
    <div className="div-1">
      This is div 1
      <div className="div-controls">
        <button
          className="backward-button"
          onClick={props.switchCaller("init")}
        >
          Back to div1
        </button>
        <button className="forward-button" onClick={props.switchCaller("div2")}>
          Go to div2
        </button>
      </div>
    </div>
  );
}

function DivTwo(props) {
  return (
    <div className="div-2">
      This is div 2
      <div className="div-controls">
        <button
          className="backward-button"
          onClick={props.switchCaller("div1")}
        >
          Back to div1
        </button>
        <button className="forward-button" onClick={props.switchCaller("div3")}>
          Go to div3
        </button>
      </div>
    </div>
  );
}

function DivThree(props) {
  return (
    <div className="div-3">
      This is div 3
      <div className="div-controls">
        <button
          className="backward-button"
          onClick={props.switchCaller("div2")}
        >
          Back to div2
        </button>
      </div>
    </div>
  );
}

export { DivOne, DivTwo, DivThree, StandardDiv };
