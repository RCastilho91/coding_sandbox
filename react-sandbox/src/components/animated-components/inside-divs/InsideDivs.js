import React, { Component } from 'react';

class FirstDiv extends Component {

    constructor(props){
        super(props);

        this.state = {
            active: true
        }

        this.handleScroll = this.handleScroll.bind(this);
    }


    handleScroll() {
        this.setState({
            active: !this.state.active
        });
    }

    render(){
        return(
            <div className="first-div">
                This is the first division
            </div>
        );
    }
}

export {
    FirstDiv
}