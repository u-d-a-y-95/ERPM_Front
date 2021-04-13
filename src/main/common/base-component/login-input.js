import React from 'react'

function LoginInput(props) {

    return <div className="login-form-field px-2">
        <label >{props.label}</label>
        <div className="d-flex align-items-center">
            <input
            className="w-100"  
            type={props.type} 
            value={props.value} 
            onChange={props.onChange}
            placeholder={props.placeHolder}
             />
            <i className={props.icon}></i>
        </div>
    </div>
}


export default LoginInput