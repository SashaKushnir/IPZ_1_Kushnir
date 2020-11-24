import { createRef } from 'react'
import { AddTaskActionCreator, EditActionCreator } from '../../rstore/WorkSpaceReducer'
import Task from './Task/Task'
import s from './TaskList.module.css'



const TaskList = (props) => {
    let showtasks = props.TaskListSetter.TaskList.map((value, index) =>
         <Task  dispatch = {props.dispatch}
         Hidden = {props.TaskListSetter.Hidden} 
         value ={value} index = {index}/>)
    let TaskRef = createRef()
    // props.TaskList.map(obj => <Task taskInfo = {obj}/>)
    const addTask = () => {
        props.dispatch(AddTaskActionCreator(TaskRef.current.value))
        TaskRef.current.value = ''
    }
    const Edit = () => {
        props.dispatch(EditActionCreator())
    } 
    return(
        <div className = {s.TaskList}>
           
            <textarea  ref = {TaskRef} rows = '2' cols = "27" 
            placeholder = 'Enter new task'/>
            <div></div>
            <button onClick = {addTask}>Add Task</button>
             <ul>
            {showtasks}
            </ul>
            <button onClick = {Edit}  >{props.TaskListSetter.Value}</button>
        </div>
    )
}
export default TaskList