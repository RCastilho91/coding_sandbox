import React from 'react';
import './AlternateSwitch.css';

export default function AlternateSwitch(props){
    return(
        <div className={'alternate-switch'} role={"group"}>
            <label className={props.switchStyle[0]}>
                <input type="radio" name="options" id="option1" value={0} onChange={props.debugChange} /> Zero Interaction </label>
            <label className={props.switchStyle[1]}>
                <input type="radio" name="options" id="option2" value={1} onChange={props.debugChange} /> Unknown </label>
            <label className={props.switchStyle[2]}>
                <input type="radio" name="options" id="option3" value={2} onChange={props.debugChange} /> Interaction </label>
        </div>
    )
}
