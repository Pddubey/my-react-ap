import React from "react";
import Task from "./Tasks";
function TaskListComponent(props) {
    const TaskListGroup={
        
        
        // alignItems:"center",
        // padding:"10px",
        // margin:"10px",
        // backgroundColor:"yellow",
        marginTop:"10px",
    }
    return(
    <div style={TaskListGroup} >
            <Task name="Make me tea" />
            <Task name="Make me coffee" />
            <Task name="Make me juice" />
        
    </div>
     );
}
export default TaskListComponent;