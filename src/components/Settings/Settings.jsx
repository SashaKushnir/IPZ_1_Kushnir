import React from 'react'
import { NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import s from './Settings.module.css'

const Settings = (props) => {

    const exit = () => {
        auth.signOut()
        props.changeNavInto(false)
    }

    return (
        <div className = {s.Settings}>
            <NavLink to ="/">
            <button onClick={exit}>Exit Account</button>
            </NavLink>
        </div>
    )
}

export default Settings