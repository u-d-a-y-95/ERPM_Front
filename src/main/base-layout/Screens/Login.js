import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import logo from "../../../assets/image/erp-logo.png";
import LoginInput from "../../common/base-component/login-input";
import MasterErrorText from "../../common/base-component/master-errortext";
import http from '../../services/http/http-client'
import lh from '../../services/local-storage'
import { useDispatch } from "react-redux";
import { setLoginDataToState } from '../../state/actions/auth-action'
import { setUserDataToState } from '../../state/actions/user-action'
import { setUserCurrentInfoToState } from '../../state/actions/user-current-info-action'

function Login() {
  //initialValues;
  const dispatch = useDispatch();
  const initialValues = {
    userName: "",
    password: "",
  };



  //validationSchema
  const validationSchema = Yup.object().shape({
    userName: Yup.string()
      .email("Provide valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log(values);
    http.postData('https://demoerpm.ibos.io/identity/LogIn/UserLogIn', values)
      .then(res => {
        dispatch(setLoginDataToState({
          userName: values.userName,
          password: values.password,
          isLogged: true,
          token: res.data.auth.token,
          accountName: res.data.accountName,
          accountId: res.data.accountId,
          userId: res.data.userId
        }))
        dispatch(setUserDataToState({
          user: res.data
        }))
        dispatch(setUserCurrentInfoToState({
          userId: res.data.userId,
          accountId: res.data.accountId,
          businessUnitId: ""
        }))
        lh.setData('user', res.data)

      })
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <>
      <div className="iboslogo">
        <img src={logo} alt='' />
      </div>
      <div className='login-left-decription'>
        <div className='ibos-desctiption h-100 d-flex flex-column justify-content-start'>
          <h3>Welcome T iBOS ERP-M</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam
            maiores eveniet, dolorum itaque velit iure fuga corporis repudiandae
            quis?
          </p>
        </div>
      </div>
      <div className='login-screen loginPage d-flex justify-content-end align-items-center'>
        <div className='loginArea px-5 '>
          <p className='text-center welcome-text pt-5'>Welcome Back!</p>
          <p className='text-center login-text d-flex flex-column justify-content-center align-items-center'>
            Please Log In To Your Account
            <div className='line mt-1' />
          </p>

          <div className='container'>
            <form onSubmit={formik.handleSubmit}>
              <div className='row'>
                <div className='col-12 mt-4'>
                  <LoginInput
                    name='userName'
                    label='Email'
                    type='email'
                    icon='fa fa-envelope'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik?.values?.email}
                    disabled={false}
                  />
                  {formik.errors.userName && formik.touched.userName ? (
                    <MasterErrorText message={formik.errors.userName} />
                  ) : null}
                </div>
                <div className='col-12 mt-3'>
                  <LoginInput
                    name='password'
                    label='Password'
                    icon='fa fa-unlock-alt'
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik?.values?.password}
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <MasterErrorText message={formik.errors.password} />
                  ) : null}
                </div>
                <div className='col-12 d-flex justify-content-between mt-2'>
                  <div>
                    <input type='checkbox' name='' id='' />
                    Remember Me
                  </div>
                  <p>Forgot Password</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-center mt-3">
                <button className='login-submit-btn' type='submit'>
                  Login
                </button>
                <a
                  className='navigate-link mt-2 mb-5'
                  style={{ color: "#46455F" }}
                  href='#'
                >
                  Don't have an account? Sign Up
              </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
