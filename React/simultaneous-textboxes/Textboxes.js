import React, { Component } from 'react';

class TextBoxes extends Component {
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
          ...state,
          [ changeEvent.target.name ]: value
        });
    }

    render(){
        return(
            <form>
                <label>Text one</label>
                <input
                    type="text"
                    name="text-one"
                    value={ state.textOne }
                    onChange={ handleChange }
                />

                <label>Text two</label>
                <input
                    type="text"
                    name="text-two"
                    value={ state.textTwo }
                    onChange={ handleChange }
                />
            </form>
       );
    }
}