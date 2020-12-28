import React, { useState } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import { auth } from '../../firebase/firebase'
import s from './Registration.module.css'



const Registration = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [boss, setBoss] = useState("")

    const history = useHistory()
    const signUp = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/_loginisation')
            })
            .catch((error) => alert(error))
    }



    return (
        <div className={s.all}>
            <h2 className={s.toCentre}>Registration</h2>
        <form className={s.registerField} action="">
            <div>
             email : <input className={s.input} value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
            </div>
            <div>
               password : <input className={s.input} value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
            </div>
            <div>
               name : <input className={s.input} value={name} onChange={(e) => setName(e.target.value)} type="name" />
            </div>
            
            <div>
                Boss : <input className={s.input} value={boss} onChange={(e) => setBoss(e.target.value)} type="checkbox" />
            </div>
            <div>
            <button className={s.button} onClick={signUp}>
                Sign up
            </button>
            </div>
            <NavLink className={s.Navlink} to ='_loginisation'>
               <div className={s.toCentre}>
                Log in without creating account
                </div>
            </NavLink>
        </form>
        </div>
    )
}
export default Registration