import s from './Session.module.css'
import React from 'react'

const Session = (props) => {

return (
    <div>
    <div className={s.Sessionwrapper}>
        <div  className = {s.SessionN , s.item}>Session Number {props.index + 1} </div><br/>
         <div   className = {s.item}>Date :
         <div>
          {props.obj.date.day} : {props.obj.date.month} : {props.obj.date.year}
          </div></div>
        <div className = {s.item}> Session started at 
        <div>
        {props.obj.startTime.hours} : {props.obj.startTime.minutes} : {props.obj.startTime.seconds}
        </div></div>
        <div className = {s.item}>Session ended at
        <div>
        {props.obj.endTime.hours} : {props.obj.endTime.minutes} : {props.obj.endTime.seconds}
        </div></div>
        <div className = {s.item}>You worked for
        <div> 
        {props.obj.howMuch.hours} : 
        {props.obj.howMuch.minutes} : {props.obj.howMuch.seconds}
        </div></div>
    </div>
    <div className = {s.line}>
    _________________________________________________________________________________________________
    </div>
    </div>
)

}

export default Session