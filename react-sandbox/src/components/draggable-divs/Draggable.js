import React, { Component } from 'react';

class DraggableDiv extends Component {

    constructor(props){
        super(props);
        this.state = {
            xCoordinate: 0,
            yCoordinate: 0
        }
    
        this.repositionDiv = this.repositionDiv.bind(this);
    
    }

    repositionDiv(x, y) {
        this.setState({
            xCoordinate: x,
            yCoordinate: y,
        });
    }

    render(){
        return(
            <div className="draggable">
                Drag me around!
            </div>
        )
    }

}

export default DraggableDiv