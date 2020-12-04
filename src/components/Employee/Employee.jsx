
import React from 'react'
import s from './Employee.module.css'


// followed: false
// id: 12996
// name: "Sanya07"
// photos:
// large: null
// small: null

// status: null
// uniqueUrlName: null


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

       
            <div   className={s.EmployeeItemWrapper}>
             
             
            Total Employees : {props.totalEmployeeItems}

            {
                props.EmployeeList.map(e => {
                    return (<div className={s.EmployeeItem}>
                        {e.id} , {e.name} , {e.status}
                    </div>)
                  })
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
            {curEmpP <= totEmpP - totEmpP % 5 ? <span onClick={() => props.changeCurrentPage_(totEmpP)}>
                {totEmpP}
            </span> : null}
        </div>

    )
}


export default Employee