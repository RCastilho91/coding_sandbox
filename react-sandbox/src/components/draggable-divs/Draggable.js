import React, { Component } from 'react';

class DraggableDiv extends Component {

    constructor(props){
        super(props);
        this.state = {
            xCoordinate: 150,
            yCoordinate: 150
        }
    
        this.repositionDiv = this.repositionDiv.bind(this);
    }

    repositionDiv(evt) {
        evt.preventDefault();

        evt = evt || window.event;
        var x = evt.pageX;
        var y = evt.pageY;

        this.setState({
            xCoordinate: x,
            yCoordinate: y,
        });

        console.log(`X: ${x}, Y: ${y}`);
        console.log(`State X: ${ this.state.xCoordinate }, State Y: ${ this.state.yCoordinate }`);
    }

    render(){
        var style = {
            "left": `${ this.state.xCoordinate }px`,
            "top": `${ this.state.yCoordinate }px`,
            "background-color": "red"
        }
        
        return(
            <div className="draggable-div" draggable onDragEnd={ (evt) => this.repositionDiv(evt) } style={ style }>
                Drag me around!
            </div>
        )
    }

}

export default DraggableDiv