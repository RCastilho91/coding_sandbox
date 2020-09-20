import React from "react";

export default function InitialDiv(props) {
  var switchCaller = (element) => {
    switcherFunction(element);
  };

  var switcherFunction = (element) => {
    switch (element) {
      case "div1":
        console.log("div1");
        break;
      case "div2":
        console.log("div2");
        break;
      case "div3":
        console.log("div3");
        break;

      default:
        console.log("Initial div");
    }
  };
  return (
    <div className="initial-div">
      Hello there
      <button onClick={switchCaller("div1")}>Go to div1</button>
    </div>
  );
}
