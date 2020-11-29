import s from './WorkSpace.module.css'

import WorkTimeSetterContainer from './WorkTimeSetter/WorkTimeSetterContainer'
import React from 'react'
import TaskListContainer from './TaskList/TaskListContainer'

const WorkSpace = () => {
    
    return (
        <div className ={s.WorkSpaceWrapper}>
            <WorkTimeSetterContainer />
            <TaskListContainer />
        </div>
    )
}

export default WorkSpace