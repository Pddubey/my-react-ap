import '../App.css';
import InputField from './Input';
import Button from './Button';
import TaskListComponent from './TaskList';

function ToDoApp() {
    return(
         <div className='main'>
      <div className='to-do-app'>
        <h1 className='title'>To Do Application</h1>
        <div className='input-group'>
          <InputField />
          <Button name='Add'/>
        </div>
        <div className='task-list-wrapper'>
          <TaskListComponent />
        </div>
        

        <div className='reset-btn-wrapper'>
          <Button name='Reset' className="reset-btn"/>
        </div>
        
      </div>
    
    </div>
    );
};

export default ToDoApp;