import React from  'react'
import s from './Schedule.module.css'

const Schedule = (props) => {
    debugger
    return (
        <div className= {s.Schedule}>
        <div>
            {props.day}
        </div>
        <div>{props.Time}</div>
        </div>
    )
}

export default Schedule