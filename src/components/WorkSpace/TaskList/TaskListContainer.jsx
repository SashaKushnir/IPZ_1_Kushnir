
import TaskList from './TaskList'
import { connect } from 'react-redux'
import { AddTaskActionCreator, EditActionCreator, deleteTaskActionCreator } from '../../rstore/WorkSpaceReducer'


let mapStateToProps = (state) => {

    return {
        TaskListSetter : state.WorkSpaceInfo.TaskListSetter
    }
}

let mapDispatchToProps = (dispatch) => {
    debugger
    return {
        addTask : (m) => {  
            dispatch(AddTaskActionCreator(m))
            },
            Edit : () => {
                dispatch(EditActionCreator())
            },
            
            deleteTask : (m) => {
                const m1 = deleteTaskActionCreator(m)
                dispatch(m1 )
            }
        
        
    }
}

const TaskListContainer = connect(mapStateToProps, mapDispatchToProps)(TaskList)


export default TaskListContainer