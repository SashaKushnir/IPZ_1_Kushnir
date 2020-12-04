import React from 'react'
import s from './Task.module.css'


const Task = (props) => {


    return (
        <li >
            <div className={s.Task}>
                <div>{props.value} </div>
                <div><input type="checkbox" /> </div>
                <div >
                    <div class="close" hidden = {props.Hidden}>
                       <input onClick = {() => props.deleteTask(props.index)}   type="button" value='delete'/>
                    </div>
                </div>
            </div>
        </li>
    )
}


export default Task