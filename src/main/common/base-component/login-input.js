import React from "react";

function LoginInput(props) {
  return (
    <div className="login-form-field px-2 pb-1">
      <label>{props.label}</label>
      <div className="d-flex align-items-center">
        <input
          className="w-100"
          name={props.name}
          type={props.type}
          id={props.name}
          placeholder={props.placeHolder}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onBlur}
          disabled={props.disabled}
          readOnly={props.readOnly}
        />
        <i className={props.icon}></i>
        {/* <img
          src={props.icon}
          alt=""
          className="img-responsive"
          style={{ width: "22px" }}
        /> */}
      </div>
    </div>
  );
}

export default LoginInput;
