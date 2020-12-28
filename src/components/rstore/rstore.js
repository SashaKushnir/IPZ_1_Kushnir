import {combineReducers, createStore} from "redux"
import EmployeeReducer from "./EmployeeReducer"
import ProfileReducer from "./profileReducer"
import SettingsReducer from "./settingReducor"
import WorkSpaceInfoReducer from './WorkSpaceReducer'

let reducers = combineReducers ({
    WorkSpaceInfo : WorkSpaceInfoReducer,
    ProfileInfo : ProfileReducer,
    EmployeeInfo : EmployeeReducer,
    Settings : SettingsReducer
})


let store = createStore(reducers)


export default store