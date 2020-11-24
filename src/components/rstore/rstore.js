import {combineReducers, createStore} from "redux"
import ProfileReducer from "./profileReducer"
import WorkSpaceInfoReducer from './WorkSpaceReducer'

let reducers = combineReducers ({
    WorkSpaceInfo : WorkSpaceInfoReducer,
    ProfileInfo : ProfileReducer
})


let store = createStore(reducers)


export default store