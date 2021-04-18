import React from 'react';
import NavLink from '../common/base-component/nav-link'
import MasterSelect from '../common/base-component/master-select'
import { menu } from '../constant/url.constant'
import '../../assets/css/sidebar.css'
import logo from "../../assets/image/erp-logo.png"
import ibosIcon from "../../assets/image/ibosIcon.png"
function Sidebar(props) {
    function onClickHandler(e) {
        console.dir(e.target.parentNode)
        if (e.target.parentNode.className.split(" ").includes("test")) {
            e.target.parentNode.style.backgroundColor = e.target.parentNode.style.backgroundColor ? "" : "#33AEE3"
        }
        if (e.target.nextElementSibling) {
            e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display ? "" : "block"
        }
    }
    return (
        <div className="sidebar" style={props.isExpandSidebar ? { width: "250px" } : { width: "70px" }}>
            <div className="company-logo d-flex justify-content-center  mt-3">
                {
                    props.isExpandSidebar &&
                    <img
                        style={{
                            width: "150px",
                            transition:"width" 
                        }}
                        src={logo}
                        alt="ibosLOg"
                    />
                    ||
                    < img
                        style={{
                            width: "25px"
                        }}
                        src={ibosIcon}
                        alt="ibosLOg"
                    />

                }

            </div>
            <div className="branchSelect">
                <MasterSelect />
            </div>
            <div className="menu mt-5">
                {
                    menu.map((item, index) => {
                        return (
                            <div className={item.children.length > 0 ? "menu-li test" : "menu-li"}>
                                <span className="menu-li-link" onClick={onClickHandler}>
                                    <i className={`${item.icon} mr-3`}></i>
                                    {item.label}</span>
                                {
                                    item.children && <NavLink items={item.children} />
                                }
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default Sidebar