import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { auth } from '../../../firebase/firebase'
import s from './Loginisation.module.css'



const Loginisation = () => {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()
    const login = (e) => {
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            history.push('/_profile')
        })
        .catch(() => alert('Bad login or password'))
    }

return (
    <div className={s.Login}>
        <h1 className={s.ToCentre}>Loginisation</h1>
    <form className={s.LogWrapper} action="">
        <div>
        email : <input value= {email} onChange={(e) => setEmail(e.target.value)} type="email"/>
        </div>
        <div>
            password : <input value= {password} onChange={(e) => setPassword(e.target.value)} type="password"/>
        </div>
        <div></div>
        <div>
        <button onClick= {login}>
            Log in
        </button>
        </div>
    </form>
    <div>
        <NavLink  className={s.toRegister} to = 'registration'>
        <div>Click to create your account</div>
        </NavLink>

    </div>
    </div>
)
}
export default Loginisation