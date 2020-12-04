/* eslint-disable */






const setStartWorkTime = 'setStartWorkTime'
const setEndWorkTime = 'setEndWorkTime'
const reset = 'reset'
const addTask = 'addTask'
const Edit = 'Edit'
const deleteTask = 'deleteTask'
const setNewTAV = 'setNewTAV'


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

        WorkFor: {
            hours: '',
            minutes: '',
            seconds: ''
        },
        WorkingForGetter() {
            let secWorked = this.EndTime.hours * 3600 + this.EndTime.minutes * 60 + this.EndTime.seconds - this.StartTime.hours * 3600 - this.StartTime.minutes * 60 - this.StartTime.seconds
            this.WorkFor.hours = parseInt(secWorked / 3600)
            this.WorkFor.minutes = parseInt((secWorked - this.WorkFor.hours * 3600) / 60)
            this.WorkFor.seconds = (secWorked - this.WorkFor.hours * 3600 - this.WorkFor.minutes * 60)

        },
        makeNull() {
            this.StartTime.hours = '00'
            this.StartTime.minutes = '00'
            this.StartTime.seconds = '00'
            this.EndTime.hours = '00'
            this.EndTime.minutes = '00'
            this.EndTime.seconds = '00'
            this.WorkFor.hours = '00'
            this.WorkFor.minutes = '00'
            this.WorkFor.seconds = '00'

        },
        startButtomEnable: false,
        endButtomEnable: true,
        resetButtom: true
    },
    TaskListSetter: {
        TaskList: [
            'Write a report',
            'Make Excel Table'
        ],
        CurrentNewTask: '',
        Value: 'Edit',
        Hidden: true
    }
}

const WorkSpaceInfoReducer = (WorkSpaceInfo = WorkSpace, action) => {
    let WorkSpaceInfoCopy
    
    switch (action.type) {

        case setStartWorkTime:
            return {
                ...WorkSpaceInfo,
                WorkTimeSet: {...WorkSpaceInfo.WorkTimeSet,
                    StartTime: { ...WorkSpaceInfo.WorkTimeSet.StartTime,
                        hours : new Date().getHours(),
                        minutes : new Date().getMinutes(),
                        seconds : new Date().getSeconds()
                    },
                    startButtomEnable : true,
                    endButtomEnable : false,
                    resetButtom : true
                }
            }

        case setEndWorkTime:
            WorkSpaceInfoCopy = {
                ...WorkSpaceInfo,
                WorkTimeSet: {
                    ...WorkSpaceInfo.WorkTimeSet,
                    EndTime: { ...WorkSpaceInfo.WorkTimeSet.EndTime },
                    WorkFor: { ...WorkSpaceInfo.WorkTimeSet.WorkFor }
                }

            }

            WorkSpaceInfoCopy.WorkTimeSet.EndTime.hours = new Date().getHours()
            WorkSpaceInfoCopy.WorkTimeSet.EndTime.minutes = new Date().getMinutes()
            WorkSpaceInfoCopy.WorkTimeSet.EndTime.seconds = new Date().getSeconds()
            WorkSpaceInfoCopy.WorkTimeSet.WorkingForGetter()
            WorkSpaceInfoCopy.WorkTimeSet.startButtomEnable = false
            WorkSpaceInfoCopy.WorkTimeSet.endButtomEnable = true
            WorkSpaceInfoCopy.WorkTimeSet.resetButtom = false
            return WorkSpaceInfoCopy 

        case reset:
            WorkSpaceInfoCopy =  {
                ...WorkSpaceInfo,
                WorkTimeSet: {...WorkSpaceInfo.WorkTimeSet,
                    StartTime: { ...WorkSpaceInfo.WorkTimeSet.StartTime},
                    EndTime: { ...WorkSpaceInfo.WorkTimeSet.EndTime},
                    WorkFor: { ...WorkSpaceInfo.WorkTimeSet.WorkFor}
                }
            }
            WorkSpaceInfoCopy.WorkTimeSet.makeNull()
            return WorkSpaceInfoCopy

        case addTask:

            return {
                ...WorkSpaceInfo,
                TaskListSetter: {
                    ...WorkSpaceInfo.TaskListSetter,
                    CurrentNewTask: '',
                    TaskList: [...WorkSpaceInfo.TaskListSetter.TaskList, WorkSpaceInfo.TaskListSetter.CurrentNewTask]
                },

            }

        case Edit:

            return {
                ...WorkSpaceInfo,
                TaskListSetter: {
                    ...WorkSpaceInfo.TaskListSetter,
                    Hidden: !WorkSpaceInfo.TaskListSetter.Hidden,
                    Value: WorkSpaceInfo.TaskListSetter.Value == 'Edit' ? "Back" : 'Edit',
                }
            }


        case deleteTask:

            return {
                ...WorkSpaceInfo,
                TaskListSetter: {
                    ...WorkSpaceInfo.TaskListSetter,
                    TaskList: [...WorkSpaceInfo.TaskListSetter.TaskList.filter((val, index) => index !== action.index)]
                }
            }


        case setNewTAV:

            return {
                ...WorkSpaceInfo,
                TaskListSetter: {
                    ...WorkSpaceInfo.TaskListSetter,
                    CurrentNewTask: action.writeTask
                }
            }
        default:
            return WorkSpaceInfo
    }
}
export const StartWorkTimeActionCreator = () => ({ type: setStartWorkTime })
export const setNewTAVActionCreator = (writeTask) => ({ type: setNewTAV, writeTask: writeTask })
export const EndWorkTimeActionCreator = () => ({ type: setEndWorkTime })
export const ResetActionCreator = () => ({ type: reset })
export const AddTaskActionCreator = (Task) => ({ type: addTask, Task: Task })
export const EditActionCreator = () => ({ type: Edit })
export const deleteTaskActionCreator = (index) => ({ type: deleteTask, index: index })
export default WorkSpaceInfoReducer



window.w = { WorkSpace }