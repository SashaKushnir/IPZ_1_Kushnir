/* eslint-disable */

const sessions = 'sessions'
const schedules = 'schedules'
const setUserToProfile = 'setUserToProfile'
const isUserIdSet = 'isUserIdSet'

let Profile = {
    WeekSchedule : [
        {Time : '08:00 - 17:00', day : 'Monday'},
        {Time : '08:00 - 18:00', day : 'Tuesday'},
        {Time : '09:00 - 17:00', day : 'Wednesday'},
        {Time : '08:30 - 17:00', day : 'Thursday'},
        {Time : '08:30 - 17:00', day : 'Friday'},
        {Time : 'Free day', day : 'Saturday'},
        {Time : 'Free day', day : 'Sunday'}
    ],

    SeansList : [
        {startTime : {hours : 1, minutes : 1, seconds : 1}, 
        endTime : {hours : 1, minutes : 1, seconds : 1}, 
        howMuch : {hours : 1, minutes : 1, seconds : 1},
        date : {day : 1, month : 1, year : 1}},
    ],
    TotalWorkTime : {
        hours : '18',
        minutes : '00',
        seconds : '00'
    },
    id : '1',
    name : 'Oleksandr',
    surname : 'Kushnir',
    profession : 'Front end Junior Developper',
    hidesession : true,
    hideschedule : true,
    profile1 : {},
    userIdIsSet : null
}

window.p = Profile



const ProfileReducer = (ProfileInfo = Profile, action) => {

    switch (action.type) {
        
        case sessions :  
            return  {
                    ...ProfileInfo, 
                    SeansList  : [...ProfileInfo.SeansList],
                    hidesession : !ProfileInfo.hidesession
            }

        case schedules:
        
            return  {...ProfileInfo, 
                WeekSchedule : [...ProfileInfo.WeekSchedule],
                hideschedule : !ProfileInfo.hideschedule
            }

        case setUserToProfile : {

            return {
                ...ProfileInfo,
                profile1 : {...action.profileById}
            }
        }
        
        case isUserIdSet: {

            return {
                ...ProfileInfo,
                userIdIsSet : !action.userId ? false : true 
            }
        }

        default:
            return ProfileInfo
    }
}
export const showScheduleActionCreator = () => ({ type: schedules})
export const showSessionsActionCreator = () => ({ type: sessions})
export const setUserToProfileAC = (profileById) => ({ type: setUserToProfile, profileById : profileById})
export const sendingUserIdOnCheckAC = (userId) => ({ type: isUserIdSet, userId })


export default ProfileReducer



