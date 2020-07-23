import React, { Component } from 'react';

export default class TextBoxes extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: ""
        }
    }

    handleChange(changeEvent) {
        const value = changeEvent.target.value;
        
        this.setState({
          content: value,
        });
    }

    render(){
        return(
            <div className="container">
                <div className="input-container">
                    <label>Text one</label>
                    <input
                        type="text"
                        value={ this.state.content }
                        onChange={ this.handleChange.bind(this) }
                    />
                </div>

                <div className="input-container">
                    <label>Text two</label>
                    <input
                        type="text"
                        value={ this.state.content }
                        onChange={ this.handleChange.bind(this) }
                    />
                </div>
            </div>
       );
    }
}