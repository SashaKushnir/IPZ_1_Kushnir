import s from './Profile.module.css'
import Schedule from './Schedule/Schedule'
import Session from './Session/Session'
import React from 'react'
import { showScheduleActionCreator, showSessionsActionCreator } from '../rstore/profileReducer'

//const showAllSeanses
// const showMySchedule




const Profile = (props) => {

    let showSchedule = props.ProfileInfo.WeekSchedule.map((obj) =>
        <Schedule day={obj.day} Time={obj.Time} />)
    let showSessions = props.ProfileInfo.SeansList.map((obj,index) =>
        <Session index = {index} obj={obj} />)

    const showschedule = () => {
        props.dispatch(showScheduleActionCreator())
    }
    const showsessions = () => {
        props.dispatch(showSessionsActionCreator())
    }

    
    debugger
    return (
        <div className={s.Profile}>
            <div className={s.wrapForB}>
                <div>
                    {props.ProfileInfo.name}  {props.ProfileInfo.surname}
                    <div></div>
            Position : {props.ProfileInfo.profession}
                </div>
                <div>
                    <button onClick={showschedule} className={s.rightButtom}>Show Schedule</button>
                    <button onClick={showsessions} className={s.rightButtom}>ShowWorkSessions</button>
                </div>
            </div>

            <div className={s.ScheduleSessionwrapper}>
                <div className= {s.item}> 
                {props.ProfileInfo.hideschedule ? '' :<div >{showSchedule}</div>}
                </div>
                <div className= {s.item}>
                {props.ProfileInfo.hidesession ? '' :<div >{showSessions}
                </div>}
                    
                </div>
            </div>

        </div>
    )
}

export default Profile