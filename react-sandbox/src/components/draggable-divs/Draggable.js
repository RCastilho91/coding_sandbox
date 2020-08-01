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
        var style = {
            "left": this.state.xCoordinate + "px",
            "top": this.state.yCoordinate + "px"
        }
        
        return(
            <div className="draggable" style={ style }>
                Drag me around!
            </div>
        )
    }

}

export default DraggableDiv