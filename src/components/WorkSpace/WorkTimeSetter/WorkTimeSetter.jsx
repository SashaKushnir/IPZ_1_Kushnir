import s from './WorkTimeSetter.module.css'

const WorkTimeSetter = (props) => {



    return (
        <div className={s.WorkTimeSetter}>
            <div>
                Work Timestart     {props.WorkTimeSetterInfo.StartTime.hours} :
            {props.WorkTimeSetterInfo.StartTime.minutes} :
            {props.WorkTimeSetterInfo.StartTime.seconds}
            <div></div>
                <button onClick={props.setStartTime} disabled = {props.WorkTimeSetterInfo.startButtomEnable} >Set worktime start</button>
            </div>
          
            <div>
               Work TimeEnd     {props.WorkTimeSetterInfo.EndTime.hours} :
                {props.WorkTimeSetterInfo.EndTime.minutes} :
                {props.WorkTimeSetterInfo.EndTime.seconds} 
                <div></div>
                <button onClick={props.setEndTime} disabled = {props.WorkTimeSetterInfo.endButtomEnable}>Set worktime end</button>
               
            </div>

            <div>
            You Worked For     {props.WorkTimeSetterInfo.WorkFor.hours} :
            {props.WorkTimeSetterInfo.WorkFor.minutes} : 
            {props.WorkTimeSetterInfo.WorkFor.seconds}
            <div></div>
                <button onClick={props.reset} disabled = {props.WorkTimeSetterInfo.resetButtom}>Reset</button>
            </div>

        </div>
    )
}
export default WorkTimeSetter