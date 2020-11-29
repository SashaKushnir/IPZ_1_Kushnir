import s from './Profile.module.css'
import Schedule from './Schedule/Schedule'
import Session from './Session/Session'
import React from 'react'

//const showAllSeanses
// const showMySchedule




const Profile = (props) => {
    
    let showSchedule_ = props.WeekSchedule.map((obj) =>
        <Schedule day={obj.day} Time={obj.Time} />)
    let showSessions_ = props.SeansList.map((obj,index) =>
        <Session index = {index} obj={obj} />)

 
    
    
    return (
        <div className={s.Profile}>
            <div className={s.wrapForB}>
                <div>
                    {props.name}  {props.surname}
                    <div></div>
            Position : {props.profession}
                </div>
                <div>
                    <button onClick={props.showschedule} className={s.rightButtom}>Show Schedule</button>
                    <button onClick={props.showsessions} className={s.rightButtom}>ShowWorkSessions</button>
                </div>
            </div>

            <div className={s.ScheduleSessionwrapper}>
                <div className= {s.item}> 
                {props.hideschedule ? '' :<div >{showSchedule_}</div>}
                </div>
                <div className= {s.item}>
                {props.hidesession ? '' :<div >{showSessions_}
                </div>}
                    
                </div>
            </div>

        </div>
    )
}

export default Profile
