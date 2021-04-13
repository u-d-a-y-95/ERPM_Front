import React from 'react'
import { useDispatch } from "react-redux"
import {Redirect} from "react-router-dom"
import avaterLogo from "../../assets/image/avaterLogo.png"
import { setLoginDataToState } from "../../main/state/actions/auth-action"


function Header() {

    const dispatch = useDispatch();

    function headerRightClicked(e) {
        document.getElementsByClassName('header-right-overley')[0].style.display = document.getElementsByClassName('header-right-overley')[0].style.display ? "" : "flex"

    }
    function logOutBtnClicked(e) {
        document.getElementsByClassName('header-right-overley')[0].style.display = ""
        dispatch(setLoginDataToState({
            userName: "",
            password: "",
            isAuth: false
        }))
        
    }
    return (
        <div className="header d-flex justify-content-between">
            <div className="ml-4"> 
                <span><i className="fa fa-bars fa-lg"></i></span>
                <span className="ml-3 font-weight-bold text-large header-left-app">ERP Management</span>
            </div>
            <div className="mr-3">
                <div
                    onClick={headerRightClicked}
                    className="d-flex justify-content-center align-items-center header-right">
                    <div className="avater">
                        <img
                            src={avaterLogo}
                            alt="avater"
                        />
                    </div>
                    <div className="ml-3 ">
                        <p className="my-0 font-weight-bold">Saiful Islam Uday</p>
                        <p className="my-0 text-center c-fontSize-8">Marketing</p>
                    </div>
                </div>
                <div className=" flex-column header-right-overley">
                    <span className="btn w-100 font-weight-bold text-left border-bottom">Profile</span>
                    <span onClick={logOutBtnClicked} className="btn  w-100 font-weight-bold text-left ">Log Out</span>
                </div>
            </div>

        </div>
    )
}

export default Header