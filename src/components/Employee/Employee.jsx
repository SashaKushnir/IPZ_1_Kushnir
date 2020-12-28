
import React from 'react'
import s from './Employee.module.css'
import EmployeeDefaultPhoro from '../../images/DefaultAvatar.jpg'
import {NavLink} from 'react-router-dom'


const Employee = (props) => {
    
    let pageNumberItems = []
    let curEmpP = props.currentEmployeePage

    let n = props.pageNumber
    let totEmpP = Math.ceil(props.totalEmployeeItems / n)
    if (props.totalEmployeeItems) {
        let i
        if (curEmpP < n + 1) {
            for (i = 1; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {
                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else if ((totEmpP % n === 0) && (curEmpP === totEmpP - n )) {
            i = curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1
            pageNumberItems[i - 1] = '...'

            for (i; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {

                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
    //    else if ((totEmpP % n === 0) && (curEmpP === totEmpP)) 
        else if (curEmpP > ((totEmpP % n !== 0) ? (totEmpP - totEmpP % n ) : (totEmpP - n - 1))) {


            for (i = totEmpP; i >= (curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1); i--) {
                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }
        else {
            i = curEmpP % n === 0 ? curEmpP - n + 1 : curEmpP - curEmpP % n + 1
            pageNumberItems[i - 1] = '...'

            for (i; i <= (curEmpP % n !== 0 ? curEmpP + n - curEmpP % n : curEmpP); i++) {

                pageNumberItems[i] = i
            }
            pageNumberItems[i] = '...'
        }


    }
   
    

    return (

       
            <div  className={s.EmployeeItemWrapper}>
             
             
            Total Employees : {props.totalEmployeeItems}
        <div className={s.item}>
        <input  type='buttom'/>
        </div>
            {
                props.EmployeeList.map(e => {
                    return (
                    <NavLink className={s.noStyles} to =  {'./_profile/' + e.id}>
                    <div className={s.EmployeeItem}>
                        <img  className = {s.imgItem} src = {e.photos.large !== null ? e.photos.large : EmployeeDefaultPhoro} alt = 'Avatar'/> 
                        <div>{e.name} , 
                        {e.status}
                        </div>
                    </div>
                    </NavLink>
                  )})
            }


            {curEmpP > n ? <span onClick={() => props.changeCurrentPage_(1)}>
                {1}
            </span> : null
            }

            {pageNumberItems.map((elem, index) => {
                return (
                    <span className={props.currentEmployeePage === index ? s.selectedItem : s.item}
                        onClick={() => props.changeCurrentPage_(index)}>
                        {elem}
                    </span>
                )
            })}
            {curEmpP <= ((totEmpP % n === 0) ? totEmpP - n : totEmpP - totEmpP % n  )? <span onClick={() => props.changeCurrentPage_(totEmpP)}>
                {totEmpP}
            </span> : null}
        </div>

    )
}


export default Employee