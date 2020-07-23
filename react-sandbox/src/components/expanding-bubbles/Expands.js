import React, { Component } from 'react';

export default class ExpansiveBubble extends Component {

    constructor(props){
        super(props);

        this.state = {
            expanded: false
        }
    }

    expandBubble() {
        this.setState({
            expanded: true
        });
    }

    contractBubble() {
        this.setState({
            expanded: false
        })
    }

    render(){
        if( !this.state.expanded ){
            return(
                <div className="contracted-bubble">
                    This is the contracted bubble
                </div>
            );
        } else {
            return(
                <div className="expanded-bubble">
                    This is the expanded bubble
                </div>
            );
        }
    }
}