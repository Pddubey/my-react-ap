import React from "react";

function Button(props) {
    const ButtonStyle={
        backgroundColor:"red",
        color:"white",
        border:"none",
        borderRadius:"5px",
        cursor:"pointer",
        margin:"10px",
        width:"80px",
        height:"20px"
    }
    return (
        <button style={ButtonStyle} onClick={props.onClick}>
            {props.name}
        </button>
    );
}

export default Button;