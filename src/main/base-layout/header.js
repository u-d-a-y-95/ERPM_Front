import React from 'react'
import { useDispatch } from "react-redux"
import { Redirect } from "react-router-dom"
import avaterLogo from "../../assets/image/avaterLogo.png"
import { setLoginDataToState } from "../../main/state/actions/auth-action"
import "../../assets/css/header.css"
import MasterButton from '../common/base-component/master-button'


function Header(props) {

    // const dispatch = useDispatch();

    // function headerRightClicked(e) {
    //     document.getElementsByClassName('header-right-overley')[0].style.display = document.getElementsByClassName('header-right-overley')[0].style.display ? "" : "flex"

    // }
    // function logOutBtnClicked(e) {
    //     document.getElementsByClassName('header-right-overley')[0].style.display = ""
    //     dispatch(setLoginDataToState({
    //         userName: "",
    //         password: "",
    //         isAuth: false
    //     }))

    // }
    return (
        <div className="header d-flex justify-content-between">
            <div className="ml-4">
                <span className="hamburger  btn btn-sm" onClick={props.hamburgerBtnPressed}><i className="fa fa-bars fa-lg"></i></span>
                <MasterButton
                    type="button"
                    className="btn btn-sm base-color text-white ml-4"
                    label="purchase"
                    icon="fa fa-shopping-cart"
                    iconClass="mr-1"
                    style={
                        {
                            letterSpacing: "0px",
                            textTransform: "uppercase",
                        }
                    }
                />
                <MasterButton
                    type="button"
                    className="btn btn-sm base-color text-white ml-2"
                    label="sales"
                    icon="fa fa-pie-chart"
                    iconClass="mr-1"
                    style={
                        {
                            letterSpacing: "0px",
                            textTransform: "uppercase",
                        }
                    }

                />
            </div>
            <div className="mr-3 d-flex justify-content-center align-items-center">
                <div className="avater">
                    <img
                        src={avaterLogo}
                        alt="avater"
                    />
                </div>
                <div className="ml-3 ">
                    <p className="my-0 font-weight-bold">Saiful Islam Uday</p>
                    <p 
                        className="my-0 text-left"
                        style={{
                            fontSize:".7rem"
                        }}
                    >Marketing</p>
                </div>
            </div>

        </div>
    )
}

export default Header