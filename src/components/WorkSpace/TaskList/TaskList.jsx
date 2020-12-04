import { createRef } from 'react'
import Task from './Task/Task'
import s from './TaskList.module.css'
import React from 'react'



const TaskList = (props) => {

    
    let showtasks = props.TaskListSetter.TaskList.map((value, index) =>
         <Task key = {index}  deleteTask = {props.deleteTask}
         Hidden = {props.TaskListSetter.Hidden} 
         value ={value} index = {index}/>)
    let TaskRef = createRef()
    let val = []
    // props.TaskList.map(obj => <Task taskInfo = {obj}/>)
      
 
    

    return(
        <div className = {s.TaskList}>
           
            <textarea onChange = {() => props.setNewTAV(TaskRef.current.value)}  ref = {TaskRef} rows = '2' cols = "27" value = {props.TaskListSetter.CurrentNewTask}
            placeholder = 'Enter new task'/>
            <div></div>
            <button onClick = {() => props.addTask(TaskRef.current.value)}>Add Task</button>
             <ul>
            {showtasks}
            </ul>
            <button onClick = {props.Edit}  >{props.TaskListSetter.Value}</button>
            {val}
        </div>
    )
}
export default TaskList