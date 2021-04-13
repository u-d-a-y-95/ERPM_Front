import React from 'react'
import {Link} from 'react-router-dom'

function LinkTag(props) {
    console.log(props.className)
    function clickOnsubMenu(e) {
        console.dir(e.target.tagName)
        if (e.target.tagName === 'A') {
            if (e.target.nextElementSibling) {
                e.target.nextElementSibling.style.display = e.target.nextElementSibling.style.display ? "" : "block"
            }
            return
        }
        e.target.parentNode.nextElementSibling.style.display = e.target.parentNode.nextElementSibling.style.display ? "" : "block"


    }
    return (
        <> {
            props.className ?
                <Link className="nav-a" to={props.url} onClick={clickOnsubMenu}>
                    <i className={`${props.icon} nav-icon`}></i>
                    {props.label}
                    <i className={`${props.className} nav-arrow`}></i>
                </Link>
                :
                <Link className="nav-a" to={props.url}>
                    <i className={`${props.icon} nav-icon`}></i>
                    {props.label}
                </Link>
        }

        </>
    )
}

export default LinkTag