/* eslint-disable */

const sessions = 'sessions'
const schedules = 'schedules'


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
        {startTime : '08:00', endTime : '19:00', howMuch : '11:00', date : '11.07'},
        {startTime : '08:00', endTime : '19:00', howMuch : '11:00', date : '11.08'}
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
    hideschedule : true
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

        default:
            return ProfileInfo
    }
}
export const showScheduleActionCreator = () => ({ type: schedules})
export const showSessionsActionCreator = () => ({ type: sessions})


export default ProfileReducer



