import s from './Session.module.css'
import React from 'react'

const Session = (props) => {

return (
    <div>
    <div className={s.Sessionwrapper}>
        <div  className = {s.SessionN , s.item}>Session Number {props.index + 1} </div><br/>
         <div   className = {s.item}>Date : {props.obj.date}</div>
        <div className = {s.item}> Session started at {props.obj.startTime}</div>
        <div className = {s.item}>Session ended at {props.obj.endTime}</div>
        <div className = {s.item}>You worked for {props.obj.howMuch}</div>
    </div>
    <div className = {s.line}>
    _________________________________________________________________________________________________
    </div>
    </div>
)

}

export default Session