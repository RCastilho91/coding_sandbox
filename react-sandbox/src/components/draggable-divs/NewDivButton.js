import React, { Component } from 'react';
import DraggableDiv from './Draggable';

class NewButtonDiv extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }
        this.newDiv = this.newDiv.bind(this);
    }

    newDiv(){
        this.setState({
            clicked: true
        })
    }

    render(){
        return(
        <div className="add-button">
            <button className="add-new-div" onClick={ this.newDiv }>+</button>
            { this.state.clicked ? <DraggableDiv /> : null }
        </div>
        )
    }
}

export default NewButtonDiv