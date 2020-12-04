/* eslint-disable */

const setE = 'setE'
const setTotalCount = 'setTotalCount'
const changeCurrentPage = 'changeCurrentPage'
const toFetch = 'toFetch'
const stopFetch = 'stopFetch'

let Employee = {
    EmployeeList : [],
    currentEmployeePage : 1,
    totalEmployeePages : 0,
    pageNumber : 5,
    totalEmployeeItems : '',
    isFetching : false
}
window.e = Employee



const EmployeeReducer = (EmployeeInfo = Employee, action) => {


    switch (action.type) {
        
        case setE :  
           return {
               ...EmployeeInfo,
               EmployeeList : [...action.array]
           }

        case setTotalCount :
           return{
               ...EmployeeInfo,
               totalEmployeeItems : action.totalCount
           }

        case changeCurrentPage : 

           return {
               ...EmployeeInfo,
               currentEmployeePage : action.newPageIndex
           }

        case toFetch :

           return {
            ...EmployeeInfo,
            isFetching : true
           }

        case stopFetch :
           
           return {
            ...EmployeeInfo,
            isFetching : false
           }

        default:
            return EmployeeInfo
    }
}
export const setEAC = (array) => ({type : setE, array : array})
export const setTotalCountAC = (totalCount) => ({type : setTotalCount, totalCount})
export const changeCurrentPageAC = (newPageIndex) => ({type : changeCurrentPage, newPageIndex})
export const toFetchAC = () => ({type : toFetch})
export const stopFetchAC = () => ({type : stopFetch})

export default EmployeeReducer



