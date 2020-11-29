
import { showScheduleActionCreator, showSessionsActionCreator } from '../rstore/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
    
    return {
        hideschedule: state.ProfileInfo.hideschedule,
        hidesession: state.ProfileInfo.hidesession,
        profession: state.ProfileInfo.profession,
        name: state.ProfileInfo.name,
        surname: state.ProfileInfo.surname,
        SeansList: state.ProfileInfo.SeansList,
        WeekSchedule: state.ProfileInfo.WeekSchedule
    }
}




let mapDispatchToProps = (dispatch) => {

    return {
        showschedule: () => {
            
            dispatch(showScheduleActionCreator())
        },
        showsessions: () => {
         
            dispatch(showSessionsActionCreator())
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)


export default ProfileContainer


