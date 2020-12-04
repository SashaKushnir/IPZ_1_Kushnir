
import {changeCurrentPageAC, setEAC, setTotalCountAC, stopFetchAC, toFetchAC} from '../rstore/EmployeeReducer'
import Employee from './Employee'
import { connect } from 'react-redux'
import * as axios from 'axios'
import React from 'react'
import loader from '../../images/VAyR.gif'

class EmployeeAPIContainer extends React.Component {
   
    componentDidMount = () => {
        this.props.toFetch()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentEmployeePage}&count=${this.props.pageNumber}`)
            .then(response => {
                this.props.setTotalCount(response.data.totalCount)
                this.props.setEmployeeByServer(response.data.items)
                this.props.stopFetch()
            })
    }

    changeCurrentPage_ = (index) => {
        this.props.toFetch()
        this.props.changeCurrentPage(index)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentEmployeePage}&count=${this.props.pageNumber}`)
        .then(response => {
            this.props.setEmployeeByServer(response.data.items)
            this.props.stopFetch()
        })
    }

  

    render() {
        return (
        <>
            {this.props.isFetching ? <img src = {loader}/> : null }
            <Employee  currentEmployeePage = {this.props.currentEmployeePage}
            pageNumber = {this.props.pageNumber}
            totalEmployeeItems = {this.props.totalEmployeeItems} 
            changeCurrentPage_ = {this.changeCurrentPage_} 
            EmployeeList = {this.props.EmployeeList}
            isFetching = {this.props.isFetching}
            />
        </>
        )
    

    }

}

const mapStateToProps = (state) => {
    
    return {
        EmployeeList : state.EmployeeInfo.EmployeeList,
        currentEmployeePage : state.EmployeeInfo.currentEmployeePage,
        totalEmployeePages : state.EmployeeInfo.totalEmployeePages,
        pageNumber : state.EmployeeInfo.pageNumber,
        totalEmployeeItems : state.EmployeeInfo.totalEmployeeItems,
        isFetching : state.EmployeeInfo.isFetching
    }
}




let mapDispatchToProps = (dispatch) => {
    return {
        setEmployeeByServer : (array) => {
            dispatch(setEAC(array))
        },
        setTotalCount : (totalCount) => {
            dispatch (setTotalCountAC(totalCount))
        },
        changeCurrentPage : (index) => {
            dispatch ( changeCurrentPageAC(index))
        },
        toFetch : () => {
            dispatch(toFetchAC())
        },
        stopFetch : () => {
            dispatch(stopFetchAC())
        }


    }
}

const EmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeAPIContainer)


export default EmployeeContainer


