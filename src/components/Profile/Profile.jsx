import s from './Profile.module.css'
import Schedule from './Schedule/Schedule'
import Session from './Session/Session'
import UserDefaultPhoto from '../../images/DefaultAvatar.jpg'
//const showAllSeanses
// const showMySchedule




const Profile = (props) => {
    
   

    let showSchedule_ = props.WeekSchedule.map((obj) =>
        <Schedule day={obj.day} Time={obj.Time} />)
    let showSessions_ = props.SeansList.map((obj,index) =>
        <Session index = {index} obj={obj} />)

 // className={s.wrapForB}
    
    return (
        <div className={s.Profile}>            
            {props.match.params.userId === undefined ? <div>
                <div>
            <div className = {s.wrapForB}>
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
            </div>
            :
             <div className ={s.profileEmp}>
                <img className = {s.profImage} 
                 src={Object.keys(props.profile1).length !== 0?(props.profile1.photos.small?props.profile1.photos.small :UserDefaultPhoto ):null  } alt="UserPhoto"/>
                 <div>
                 {props.profile1.fullName}
                 </div>
            </div>}
       
       </div>

    )
}

export default Profile
