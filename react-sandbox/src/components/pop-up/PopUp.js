import React from 'react';

export default function PopUp( props ){

    var handleClosure = props.handleClose

    return(
        <div className="modal-container">
            <div className="modal-content">
                <button onClick={ handleClosure }>Close me!</button>
            </div>
        </div>
    );
}