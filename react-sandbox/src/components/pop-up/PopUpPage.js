import React, { Component } from 'react';
import PopUp from './PopUp';

export default class ModalPage extends Component {
    constructor(props){
        super(props);

        this.state = {
            activePopup: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            activePopup: !this.state.activePopup
        })
    }

    render(){
        return(
            <div className="container">
                { this.state.activePopup ? <PopUp handleClose = { this.handleClick.bind(this) } /> : null}
                <button onClick={ this.handleClick }>Click me to open modal</button>
            </div>
        )
    }
}