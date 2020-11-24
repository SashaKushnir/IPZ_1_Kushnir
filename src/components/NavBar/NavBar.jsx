import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={s.nav}>
        
         <div className={s.item}>
        <NavLink to="/profile" activeClassName = {s.active}>Profile</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/workspace" activeClassName = {s.active} >Work space</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/settings" activeClassName = {s.active}>Settings</NavLink>
      </div>

     
    </nav>
  )
}

export default NavBar