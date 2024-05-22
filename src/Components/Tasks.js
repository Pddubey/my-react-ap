import React from "react";
import Checkbox from "./Check";
import Button from "./Button";

function Task(props) {
    const TaskGroupStyle={
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "480px",
        height: "22px",
        // border: "1px solid black",
        borderRadius: "0px",
        padding: "4px",
        margin: "2px 0px",
        backgroundColor: "pink",
        boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)" 
        
    }

    const TaskNameStyle={
        fontSize: "12px",
        fontWeight: "medium",
        color: "black",
        textAlign: "left",
        textDecoration: "none",
        // boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)"
    }

    const buttonWrapperStyle = {
        display: "flex",
        width:'30px',
        alignItems: "center",
        height: "10px",
        justifyContent:"center"
        
    }

    return (
        <div style={TaskGroupStyle} className="task-group">
             <h3 style={TaskNameStyle} className="task-name">{props.name}</h3>
             <div className="button-wrapper">
                <Checkbox />
                <Button name="Delete" /></div>
        </div>
        
       
        
    );
}

export default Task;