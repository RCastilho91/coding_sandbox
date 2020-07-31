import React, { Component } from 'react';
import PopUp from './PopUp';


class ModalPage extends Component {
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
                <button onClick={this.handleClick}>Click me to open modal</button>
                <PopUp visible={this.state.activePopup} />
            </div>
        )
    }
}

export default ModalPage;