import React from 'react';
import './ThreeWaySwitch.css';

export default function ThreeWaySwitch(props){
    return(
            <input type="range" min="0" max="2" step="1" onChange={props.handleChange} />
    )
}
