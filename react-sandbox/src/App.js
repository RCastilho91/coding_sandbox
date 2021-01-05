import React, {useState, useEffect} from 'react';
import './App.css';
import ThreeWaySwitch from "./components/three-way-switch/ThreeWaySwitch";
import AlternateSwitch from "./components/three-way-switch/AlternateSwitch";

function App() {

    const [switchValue, setSwitchValue] = useState(1);
    const [alternateValue, setAlternateValue] = useState(1);
    const [switchStyle, setSwitchStyle] = useState(["left-edge-inactive", "center-active", "right-edge-inactive"])

    useEffect(() => {}, [switchValue, alternateValue])

    const handleChange = (event) => {
        setSwitchValue(event.target.value)
    }

    const debugChange = (event) => {
        const targetValue = event.target.value;

        setAlternateValue(targetValue)
        console.log("Target value", targetValue);

        if(targetValue === '0'){
            console.log("Target value 0 detected")
            setSwitchStyle(["left-edge-active", "center-inactive", "right-edge-inactive"])
        }
        if(targetValue === '1'){
            console.log("Target value 1 detected")
            setSwitchStyle(["left-edge-inactive", "center-active", "right-edge-inactive"])
        }
        if(targetValue === '2'){
            console.log("Target value 2 detected")
            setSwitchStyle(["left-edge-inactive", "center-inactive", "right-edge-active"])
        }
    }

  return (
    <div className="App">
        <h2>Main Switch Test</h2>
        Current state: {switchValue}
        <p />
        <ThreeWaySwitch
            handleChange={handleChange}
            currentState={switchValue}
        />

        <h2>Secondary Switch Test</h2>
        Current state: {alternateValue}
        <AlternateSwitch
            debugChange={debugChange}
            alternateValue={alternateValue}
            switchStyle={switchStyle}
        />
    </div>
  );
}

export default App;
