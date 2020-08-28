import React, { Component } from 'react';
import PopUp from './PopUp';
import ToggleButton from './ToggleButton';

export default class ModalPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            activePopup: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log("Reached the parent function");

        this.setState({
            activePopup: !this.state.activePopup
        })
    }

    render(){
        return(
            <div className="container">
                { this.state.activePopup ? <PopUp handleClose = { this.handleClick.bind(this) } /> : null}
                <ToggleButton toggleFunction={ this.handleClick } />
            </div>
        )
    }
}