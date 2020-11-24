import s from './WorkTimeSetter.module.css'
import { EndWorkTimeActionCreator, ResetActionCreator, StartWorkTimeActionCreator } from './../../rstore/WorkSpaceReducer'

const WorkTimeSetter = (props) => {
    const setStartTime = () => {
        props.dispatch(StartWorkTimeActionCreator())
    }

    const setEndTime = () => {
        props.dispatch(EndWorkTimeActionCreator())
    }
    const reset = () => {
        props.dispatch(ResetActionCreator())
    }

debugger

    return (
        <div className={s.WorkTimeSetter}>
            <div>
                Work Timestart     {props.WorkTimeSet.StartTime.hours} :
            {props.WorkTimeSet.StartTime.minutes} :
            {props.WorkTimeSet.StartTime.seconds}
            <div></div>
                <button onClick={setStartTime} disabled = {props.WorkTimeSet.startButtomEnable} >Set worktime start</button>
            </div>
          
            <div>
               Work TimeEnd     {props.WorkTimeSet.EndTime.hours} :
                {props.WorkTimeSet.EndTime.minutes} :
                {props.WorkTimeSet.EndTime.seconds} 
                <div></div>
                <button onClick={setEndTime } disabled = {props.WorkTimeSet.endButtomEnable}>Set worktime end</button>
               
            </div>

            <div>
            You Worked For     {props.WorkTimeSet.WorkFor.hours} :
            {props.WorkTimeSet.WorkFor.minutes} : 
            {props.WorkTimeSet.WorkFor.seconds}
            <div></div>
                <button onClick={reset} disabled = {props.WorkTimeSet.resetButtom}>Reset</button>
            </div>

        </div>
    )
}
export default WorkTimeSetter