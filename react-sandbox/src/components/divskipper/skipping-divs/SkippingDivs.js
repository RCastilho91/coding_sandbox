import React, { Component } from 'react';

class BlueDiv extends Component {
    render(){
            return (
            <div className="blue-div">
                This is the blue div. Hope this works!
            </div>
        );
    }
}

class GreenDiv extends Component {
    render() {
        return (
            <div className="green-div">
                This is the blue div. It seems like it worked.
            </div>
        )
    }
}

class GrayDiv extends Component {
    render() {
        return(
            <div className="gray-div">
                This is the gray div.<p />

                Yep. This definitely worked!
            </div>
        )
    }
}

export {
    BlueDiv,
    GreenDiv,
    GrayDiv
}