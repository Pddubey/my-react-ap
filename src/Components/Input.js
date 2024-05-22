import React from "react";

function InputField( ) {
    const InputFieldStyle={
        borderRadius:'20px',
        border:"1px solid black",
        padding:"10px",
        margin:"10px",
        width:"200px",
        height:"2px",
        
    };
    return ( 
        <div>
            <input type="text" style={InputFieldStyle} placeholder="Enter your task" />
        </div>
    );
}
export default InputField;