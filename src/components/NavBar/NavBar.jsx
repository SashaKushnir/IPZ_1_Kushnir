import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './NavBar.module.css'

const NavBar = (props) => {
  
  return (
    <nav className={s.nav}>
        
         <div className={s.item}>
        <NavLink to="/_profile" activeClassName = {s.active}>Profile</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/_workspace" activeClassName = {s.active} >Work space</NavLink>
      </div>

      <div className={s.item}>
      <NavLink to="/_employee" activeClassName = {s.active}>Employee List</NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/_settings" activeClassName = {s.active}>Settings</NavLink>
      </div>

     
    </nav>
  )
}

export default NavBar