import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import MasterInput from "../../common/base-component/master-input";
import "../../../assets/css/login.css";
import logo from "../../../assets/image/erp-logo.png";
import LoginInput from "../../common/base-component/login-input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    gender: Yup.number().required("need number"),
  });

  function onSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues: {
      name: "day",
      gender: 1,
      color: ["red"],
      item: { label: "Yellow", value: "yellow" },
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className='iboslogo'>
        <img src={logo} alt='' />
      </div>
      <div className='login-left-decription '>
        <div className='ibos-desctiption h-100 d-flex flex-column justify-content-start'>
          <h3>Welcome T iBOS ERP-M</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam
            maiores eveniet, dolorum itaque velit iure fuga corporis repudiandae
            quis?
          </p>
        </div>
      </div>
      <div className='loginPage d-flex justify-content-end align-items-center'>
        <div className='loginArea px-5'>
          <p className='text-center welcome-text pt-5'>Welcome Back!</p>
          <p className='text-center login-text'>
            Please Log In To Your Account
          </p>
          <div className='line' />
          <div className='row'>
            <div className='col-12 mt-4'>
              <LoginInput
                name='email'
                label='Email'
                type='email'
                value={email}
                onChange={emailChange}
              />
            </div>
            <div className='col-12 mt-4'>
              <LoginInput
                name='password'
                label='Password'
                type='password'
                value={password}
                onChange={passwordChange}
              />
            </div>
            <div className='col-12 mt-4'>
              <MasterInput
                name='password'
                label='Password'
                type='password'
                value={password}
                onChange={passwordChange}
              />
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-6 text-left'>
              <input type='checkbox' name='' id='' />
              Remember Me
            </div>
            <div className='col-6 text-right'>
              <p>Forgot Password</p>
            </div>
          </div>

          <button className='login-button mt-5 w-75'>Login</button>

          <p className='pb-5 pt-3 navigate-link'>
            Don't have an account? Sign Up
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
