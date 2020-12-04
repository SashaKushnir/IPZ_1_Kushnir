import {combineReducers, createStore} from "redux"
import EmployeeReducer from "./EmployeeReducer"
import ProfileReducer from "./profileReducer"
import WorkSpaceInfoReducer from './WorkSpaceReducer'

let reducers = combineReducers ({
    WorkSpaceInfo : WorkSpaceInfoReducer,
    ProfileInfo : ProfileReducer,
    EmployeeInfo : EmployeeReducer
})


let store = createStore(reducers)


export default store