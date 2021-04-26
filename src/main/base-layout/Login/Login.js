
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";
import logo from "../../../assets/image/login-images/Group 40.png";
import "./Login.css";
import MasterErrorText from "./../../common/base-component/master-errortext";
import MasterCheckBox from "../../common/base-component/master-checkbox";
import LoginInput from './../../common/base-component/login-input';

function Login() {
  const initialValues = {
    email: "",
    password: "",
    color: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Provide valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // const loginPageFooterImage = [
  //   { id: 1, image: akijCement },
  //   { id: 2, image: akijShipingLine },
  //   { id: 3, image: akijFoodBeverage },
  //   { id: 4, image: akijPolyFibre },
  // ];

  ////////////////////////

  //submit
  function onSubmit(values) {
    console.log(values);
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const colors = [
    { label: "Remember", value: "remember" },
    // { label: "Green", value: "green" },
    // { label: "Yellow", value: "yellow" },
  ];

  return (
    <div className="loginPage">
      <div className="pl-5 pt-3 logo-area">
        <img src={logo} alt="" />
      </div>
      <div className="row">
        <div className="col-sm-5 col-md-5 col-lg-6">
          <div className="ibos-description">
            <h3>Welcome To iBOS ERP-M</h3>
            <p className="w-75">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nam
              maiores eveniet, dolorum itaque velit iure fuga corporis
              repudiandae quis?
            </p>
          </div>
        </div>
        <div className="col-sm-7 col-md-7 col-lg-6" align="center">
          <div>
            <form className="loginArea mt-3" onSubmit={formik.handleSubmit}>
              <p className="text-center welcome-text pt-5">Welcome Back!</p>
              <p className="text-center login-text">
                Please Log In To Your Account
              </p>
              <div className="line" />

              <div className="container" align="center">
                <div className="row">
                  <div className="col-md-12 mt-3">
                    <LoginInput
                      name="email"
                      id='email'
                      label="Email"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      disabled={false}
                      icon="fa fa-envelope"
                      placeholder="Email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <MasterErrorText message={formik.errors.email} />
                    ) : null}
                  </div>
                  <div className="col-md-12">
                    <LoginInput
                      name="password"
                      id="password"
                      label="Password"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                      disabled={false}
                      icon="fa fa-unlock"
                      placeholder="Password"
                    />
                    {formik.errors.password && formik.touched.password ? (
                      <MasterErrorText message={formik.errors.password} />
                    ) : null}
                  </div>
                </div>

                <div className="row d-flex justify-content-between py-3">
                  <div className="col-md-6">
                    {/* <input type="checkbox" name="" id="" />
                     
                      &nbsp; Remember Me */}

                    <MasterCheckBox
                      name="color"
                      // label="Colors"
                      data={colors}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.color}
                    />
                    {formik.errors.color && formik.errors.color ? (
                      <MasterErrorText message={formik.errors.password} />
                    ) : null}
                  </div>
                  <div className="col-md-6 pt-4">
                    <p>Forgot Password</p>
                  </div>
                </div>

                <button
                  className="login-button"
                  type="submit"
                //   disabled={!formik.isValid || !formik.dirty}
                >
                  Login
                </button>

                <div className="pb-5 pt-3">
                  <a style={{ color: "#46455F" }} href="#">
                    Already have an account?Sign In
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* 
      <div className="row">
        <div className="col-md-7 d-flex justify-content-between">
          {loginPageFooterImage?.map((item, index) => (
            <div key={index} className="image-area mb-3">
              <img src={item?.image} alt="" />
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Login;
