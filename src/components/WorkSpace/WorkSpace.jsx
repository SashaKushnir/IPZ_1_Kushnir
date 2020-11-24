import s from './WorkSpace.module.css'

import WorkTimeSetter from './WorkTimeSetter/WorkTimeSetter'
import React from 'react'
import TaskList from './TaskList/TaskList'

const WorkSpace = (props) => {
    
    return (
        <div className ={s.WorkSpaceWrapper}>
            <WorkTimeSetter WorkTimeSet = {props.WorkSpaceInfo.WorkTimeSet} dispatch = {props.dispatch}/>
            <TaskList   TaskListSetter = {props.WorkSpaceInfo.TaskListSetter} dispatch = {props.dispatch}/>
        </div>
    )
}

export default WorkSpace