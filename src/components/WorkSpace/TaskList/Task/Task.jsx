import { deleteTaskActionCreator } from '../../../rstore/WorkSpaceReducer'
import s from './Task.module.css'


const Task = (props) => {

    const deleteTask = () => {
        props.dispatch(deleteTaskActionCreator(props.index))
    }


    return (
        <li >
            <div className={s.Task}>
                <div>{props.value} </div>
                <div><input type="checkbox" /> </div>
                <div >
                    <div class="close" hidden = {props.Hidden}>
                       <input onClick = {deleteTask}   type="submit" value='delete'/>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default Task