
import WorkTimeSetter from './WorkTimeSetter'
import { connect } from 'react-redux'
import { EndWorkTimeActionCreator, ResetActionCreator, StartWorkTimeActionCreator } from './../../rstore/WorkSpaceReducer'


let mapStateToProps = (state) => {

    return {
        WorkTimeSetterInfo : state.WorkSpaceInfo.WorkTimeSet
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        
        setEndTime : () => {dispatch(EndWorkTimeActionCreator())},
        setStartTime : () => {dispatch(StartWorkTimeActionCreator())},
        reset : () => {dispatch(ResetActionCreator())}
    }
}

const WorkSpaceContainer = connect(mapStateToProps, mapDispatchToProps)(WorkTimeSetter)


export default WorkSpaceContainer