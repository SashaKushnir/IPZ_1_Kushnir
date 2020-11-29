import { createRef } from 'react'
import Task from './Task/Task'
import s from './TaskList.module.css'



const TaskList = (props) => {
    let showtasks = props.TaskListSetter.TaskList.map((value, index) =>
         <Task  deleteTask = {props.deleteTask}
         Hidden = {props.TaskListSetter.Hidden} 
         value ={value} index = {index}/>)
    let TaskRef = createRef()
    // props.TaskList.map(obj => <Task taskInfo = {obj}/>)
 
    const addTask = () => {
        props.addTask(TaskRef.current.value)
        
    }

    return(
        <div className = {s.TaskList}>
           
            <textarea onChange = {props.setNewTAV}  ref = {TaskRef} rows = '2' cols = "27" 
            placeholder = 'Enter new task'/>
            <div></div>
            <button onClick = {TaskRef.current != null ? addTask : ''}>Add Task</button>
             <ul>
            {showtasks}
            </ul>
            <button onClick = {props.Edit}  >{props.TaskListSetter.Value}</button>
        </div>
    )
}
export default TaskList