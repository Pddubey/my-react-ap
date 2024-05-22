import React, {useState} from 'react';

function AdvToDoApp() {

    const [tasks, setTasks]=useState([]);
    const [taskText, setTaskText] = useState('');

   const addTask=()=>{ 
    setTasks([...tasks,{id: Date.now() name: 'task'}]);
    }

    return (
        <div>
            <input type="text" value={taskText} onChange={(e)=>setTaskText(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task,index)=><li key={index}>{task}</li>)}
            </ul>
        </div>
    );
 }

 export default AdvToDoApp;