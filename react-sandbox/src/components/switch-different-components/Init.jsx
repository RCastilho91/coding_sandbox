import React from "react";
import { DivOne, DivTwo, DivThree, StandardDiv } from "./DifferentComponents";
import "./styles.css";

export default function InitialDiv() {
  var elementToRender;

  var switchCaller = (element) => {
    switcherFunction(element);
  };

  var switcherFunction = (element) => {
    switch (element) {
      case "div1":
        elementToRender = <DivOne switchCaller={switchCaller} />;
        break;
      case "div2":
        elementToRender = <DivTwo switchCaller={switchCaller} />;
        break;
      case "div3":
        elementToRender = <DivThree switchCaller={switchCaller} />;
        break;

      default:
        elementToRender = <StandardDiv switchCaller={switchCaller} />;
        break;
    }
  };

  return elementToRender;
}

// maybe try it simply managing states
