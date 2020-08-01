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
        if( this.state.visible === true ){
            return(
                <div>
                    <div className="btn" onClick={ this.popUpToggle }>
                        <button>Make me disappear again!</button>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }

}