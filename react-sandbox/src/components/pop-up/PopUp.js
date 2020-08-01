import React, { Component } from 'react';

export default class PopUp extends Component {
    constructor(props){
        super(props);

        this.popUpToggle = this.popUpToggle.bind(this);

        this.state = {
            visible: false
        }
    }

    popUpToggle() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render(){
        return(
            <div>
                <div className="btn">
                    <button onClick={ this.popUpToggle }>Make me disappear again!</button>
                </div>
           </div>
        )
    }

}