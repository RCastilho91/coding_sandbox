import React, { Component } from 'react';

export default class TextBoxes extends Component {
    constructor(props){
        super(props);

        this.state = {
            textOne: "",
            textTwo: ""
        }
    }

    handleChange(changeEvent) {
        const value = changeEvent.target.value;
        
        this.setState({
          textOne: value,
          textTwo: value
        });
    }

    render(){
        return(
            <form>
                <label>Text one</label>
                <input
                    type="text"
                    name="textOne"
                    value={ this.state.textOne }
                    onChange={ this.handleChange.bind(this) }
                />

                <label>Text two</label>
                <input
                    type="text"
                    name="textTwo"
                    value={ this.state.textTwo }
                    onChange={ this.handleChange.bind(this) }
                />
            </form>
       );
    }
}