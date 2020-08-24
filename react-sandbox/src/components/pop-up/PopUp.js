import React from 'react';
export default function PopUp( handleClose ){
    return(
        <div className="modal-container">
            <div className="modal-content">
                <button onClick={ handleClose }>Close me!</button>
            </div>
        </div>
    );
}