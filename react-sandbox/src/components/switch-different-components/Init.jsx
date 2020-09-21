import React, { useState } from "react";
import { DivOne, DivTwo, DivThree, StandardDiv } from "./DifferentComponents";
import "./styles.css";

export default function InitialDiv() {
  var elementToRender;
  const [currentElement, setCurrentElement] = useState('init')

  var switchCaller = (element) => {
    setCurrentElement(element);
    switcherFunction(currentElement);
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