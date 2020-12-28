import React from 'react'
import { sendingUserIdOnCheckAC, setUserToProfileAC, showScheduleActionCreator, showSessionsActionCreator } from '../rstore/profileReducer'
import Profile from './Profile'
import { connect } from 'react-redux'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'



class ProfileAPIContainer extends React.Component {
   
    componentDidMount = () => {
      
        let userId = this.props.match.params.userId
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then (response => {
            console.log(response.data)
           this.props.setUserToProfile(response.data)      
           this.props.sendingUserIdOnCheck(userId) 
        })


    }

    render () {

        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    
    return {
        hideschedule: state.ProfileInfo.hideschedule,
        hidesession: state.ProfileInfo.hidesession,
        profession: state.ProfileInfo.profession,
        name: state.ProfileInfo.name,
        surname: state.ProfileInfo.surname,
        WeekSchedule: state.ProfileInfo.WeekSchedule,
        profile1 : state.ProfileInfo.profile1,
        userIdIsSet : state.ProfileInfo.userIdIsSet,
        SeansList : state.WorkSpaceInfo.SeansList 
    }
}




let mapDispatchToProps = (dispatch) => {

    return {
        showschedule: () => {
            
            dispatch(showScheduleActionCreator())
        },
        showsessions: () => {
         
            dispatch(showSessionsActionCreator())
        },
        setUserToProfile : (profileobj) => {
            dispatch(setUserToProfileAC(profileobj))
        },
        sendingUserIdOnCheck : (userId) => {
            dispatch(sendingUserIdOnCheckAC(userId))
        }
    }
}

let WithRouteProfileComponent = withRouter(ProfileAPIContainer)
const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouteProfileComponent)


export default ProfileContainer


