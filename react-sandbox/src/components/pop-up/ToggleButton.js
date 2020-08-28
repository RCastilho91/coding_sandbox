import React from 'react';

export default function ToggleButton( props ){

    var handleOpen = props.toggleFunction;

    return(
        <button onClick={ handleOpen }>Open that</button>
    );
}