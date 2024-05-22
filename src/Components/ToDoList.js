import React, {useState} from 'react';

function ToDoList(){
    // eslint-disable-next-line no-unused-vars
    const [tasks , setTasks]=useState([]);
    const [newTask, setNewTask]=useState("");

    function addTask(){
        setTasks([...tasks,newTask]);
        setNewTask("");
    }

    return (
        <div>
            <input 
            type="text" 
            placeholder="Enter new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            ></input>
            <button onClick={addTask}>Add</button>
            <ul>
                {
                    tasks.map((task)=>(
                        <li>{task}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ToDoList;