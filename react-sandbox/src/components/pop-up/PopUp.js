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
                <div className="btn" onClick={this.togglePop}>
                    <button>Make me disappear again!</button>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
           </div>
        )
    }

}