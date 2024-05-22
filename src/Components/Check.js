import React from 'react';

function Checkbox(props) {
    const checkboxStyle={
        display:'inline-block',
    }
    return (
            <input style={checkboxStyle} type="checkbox" checked={props.checked} onChange={props.onChange} />
        
    )
}

export default Checkbox;