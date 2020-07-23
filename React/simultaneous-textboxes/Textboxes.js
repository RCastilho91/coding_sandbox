import React, { Component } from 'react';

class TextOne extends Component {
    constructor(props){
        super(props);

        this.state = {
            textContent: null
        }

        this.toggleContent = this.toggleContent.bind(this);
        this.toggleSelfContent = this.toggleSelfContent.bind(this);
    }

    toggleContent(text){
        null
    }

    toggleSelfContent(text){
        this.setState(
            { textContent: text }
        );
    }

    render(){
        return(
            <input className="regular-box" id="text-one" value={ this.state.textContent } />
        )
    }
}

class TextTwo extends Component {
    constructor(props){
        super(props);

        this.state = {
            textContent: null
        }

        this.toggleContent = this.toggleContent.bind(this);
        this.toggleSelfContent = this.toggleSelfContent.bind(this);
    }

    toggleContent(text){
        null
    }

    toggleSelfContent(text){
        this.setState(
            { textContent: text }
        );
    }

    render(){
        return(
            <input className="regular-box" id="text-two" onChange={ this.toggleContent() } value={ this.state.textContent } />
        )
    }
}

export {
    TextOne,
    TextTwo
}