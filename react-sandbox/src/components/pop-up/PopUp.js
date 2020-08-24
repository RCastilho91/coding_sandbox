import React from 'react';
export default function PopUp( handleClose, visibility ){
    
    var style = visibility === true ? "block" : "none";
    console.log(visibility);

    return(
        <div className="modal-container" style={{display: style }}>
            <div className="modal-content">
                <button>Close me!</button>
            </div>
        </div>
    )
}