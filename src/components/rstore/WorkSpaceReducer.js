/* eslint-disable */


const setStartWorkTime = 'setStartWorkTime'
const setEndWorkTime = 'setEndWorkTime'
const reset = 'reset'
const addTask = 'addTask'
const Edit = 'Edit'
const deleteTask = 'deleteTask'

let WorkSpace = {
    WorkTimeSet: {
        StartTime: {
            hours: '00',
            minutes: '00',
            seconds: '00'
        },
        EndTime: {
            hours: '00',
            minutes: '00',
            seconds: '00'
        },

        WorkFor : {
            hours : '',
            minutes  : '',
            seconds : ''
        },
        WorkingForGetter () {
               let secWorked = this.EndTime.hours * 3600 + this.EndTime.minutes * 60 +  this.EndTime.seconds - this.StartTime.hours * 3600 -  this.StartTime.minutes * 60 - this.StartTime.seconds
                this.WorkFor.hours = parseInt (secWorked / 3600)
                this.WorkFor.minutes  = parseInt((secWorked -  this.WorkFor.hours * 3600) / 60)
                this.WorkFor.seconds = (secWorked -  this.WorkFor.hours * 3600 - this.WorkFor.minutes * 60) 
                 
            } ,
        makeNull (){
            this.StartTime.hours = '00'
            this.StartTime.minutes  = '00'
            this.StartTime.seconds = '00'
            this.EndTime.hours = '00'
            this.EndTime.minutes  = '00'
            this.EndTime.seconds = '00'
            this.WorkFor.hours = '00'
            this.WorkFor.minutes  = '00'
            this.WorkFor.seconds = '00'

        },
        startButtomEnable :  false,
        endButtomEnable : true,
        resetButtom : true
    },
    TaskListSetter : {
        TaskList : [
            'Write a report', 
            'Make Excel Table'
        ],
        NewTask : '',
        Value : 'Edit',
        Hidden : true
    }
}

const WorkSpaceInfoReducer = (WorkSpaceInfo = WorkSpace, action) => {

    debugger
    switch (action.type) {
        case setStartWorkTime:
            
            WorkSpaceInfo.WorkTimeSet.StartTime.hours = new Date().getHours()
            WorkSpaceInfo.WorkTimeSet.StartTime.minutes = new Date().getMinutes()
            WorkSpaceInfo.WorkTimeSet.StartTime.seconds = new Date().getSeconds()
            WorkSpaceInfo.WorkTimeSet.startButtomEnable = true
            WorkSpaceInfo.WorkTimeSet.endButtomEnable = false
            return WorkSpaceInfo
        case setEndWorkTime:
            WorkSpaceInfo.WorkTimeSet.EndTime.hours = new Date().getHours()
            WorkSpaceInfo.WorkTimeSet.EndTime.minutes = new Date().getMinutes()
            WorkSpaceInfo.WorkTimeSet.EndTime.seconds = new Date().getSeconds()
            WorkSpaceInfo.WorkTimeSet.WorkingForGetter()
            WorkSpaceInfo.WorkTimeSet.startButtomEnable = false
            WorkSpaceInfo.WorkTimeSet.endButtomEnable = true
            WorkSpaceInfo.WorkTimeSet.resetButtom = false
            return WorkSpaceInfo
        case reset : 
        WorkSpaceInfo.WorkTimeSet.makeNull()
            return WorkSpaceInfo
            case addTask : 
            WorkSpaceInfo.TaskListSetter.NewTask = action.Task
            WorkSpaceInfo.TaskListSetter.TaskList.push( WorkSpaceInfo.TaskListSetter.NewTask)
            WorkSpaceInfo.TaskListSetter.NewTask = ''
            return WorkSpaceInfo
            case Edit :
                if(WorkSpaceInfo.TaskListSetter.Hidden == true){
                    WorkSpaceInfo.TaskListSetter.Hidden = false
                }
                else{
                    WorkSpaceInfo.TaskListSetter.Hidden = true
                }
                if (WorkSpaceInfo.TaskListSetter.Value == 'Edit'){
                    WorkSpaceInfo.TaskListSetter.Value = 'Back' 
                }
                else{
                    WorkSpaceInfo.TaskListSetter.Value = 'Edit'
                }
                return WorkSpaceInfo
            case deleteTask:
                WorkSpaceInfo.TaskListSetter.TaskList.splice(action.index, 1)


                return WorkSpaceInfo
        default:
            return WorkSpaceInfo
    }
}
export const StartWorkTimeActionCreator = () => ({ type: setStartWorkTime })
export const EndWorkTimeActionCreator = () => ({ type: setEndWorkTime })
export const ResetActionCreator = () => ({ type: reset })
export const AddTaskActionCreator = (Task) => ({type : addTask, Task : Task })
export const EditActionCreator = () => ({type: Edit})
export const deleteTaskActionCreator = (index) => ({type : deleteTask, index : index})
export default WorkSpaceInfoReducer



