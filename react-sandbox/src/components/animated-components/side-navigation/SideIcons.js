import React, { Component } from 'react';

class HomeIcon extends Component {
    constructor(props){
        super(props);

        this.state = {
            active: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            active: !this.state.active
        })
    }

    render(){
        if (this.state.active === true){
            var elementName = "home-icon-active"
        } else {
            var elementName = "home-icon-inactive"
        }

        return(
            <div className={ elementName }>
                HOME
            </div>
        )
    }
}

export {
    HomeIcon
}