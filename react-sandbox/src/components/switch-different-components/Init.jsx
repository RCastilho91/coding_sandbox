import React from "react";
import { DivOne, DivTwo, DivThree } from "./DifferentComponents";
import "./styles.css";

export default function InitialDiv() {
  var switchCaller = (element) => {
    switcherFunction(element);
  };

  var switcherFunction = (element) => {
    switch (element) {
      case "div1":
        return <DivOne switchCaller={switchCaller} />;
      case "div2":
        return <DivTwo switchCaller={switchCaller} />;
      case "div3":
        return <DivThree switchCaller={switchCaller} />;

      default:
        return <InitialDiv />;
    }
  };

  return (
    <div className="initial-div">
      Hello there. This is the initial div.
      <div className="div-controls">
        <button onClick={switchCaller("div1")}>Go to div1</button>
      </div>
    </div>
  );
}
