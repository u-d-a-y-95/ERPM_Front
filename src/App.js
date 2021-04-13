import "./App.css";
// import http from "./main/services/http/http-client";
// import ls from "./main/services/local-storage";
// import {TOKEN,TOKEN1} from './main/constant/local-storage.contant'
import LoginInput from "./main/common/base-component/login-input";
import { useState } from "react";
import * as Yup from "yup";
import akijCement from "./assets/image/authentication/akijCement.png";
import afbl from "./assets/image/authentication/afbl.png";
import akijShipingLine from "./assets/image/authentication/akijShipingLine.png";
import akijPolyFibre from "./assets/image/authentication/akijPolyFibre.png";
import { useFormik } from "formik";
import MasterErrorText from "./main/common/base-component/master-errortext";

function App() {
  // http.de('https://jsonplaceholder.typicode.com/todos/1')
  // .then(res=>{
  //   console.log(res)
  // })
  // ls.setData(TOKEN,'aziz')
  // const [name, setName] = useState("");
  // function onChange(e) {
  //   setName(e.target.value);
  // }

  //azizul code;
  const countryDDL = [
    { value: 1, label: "Bangladesh" },
    { value: 2, label: "India" },
    { value: 3, label: "China" },
  ];

  //initialValues;
  const initialValues = {
    name: "",
    email: "",
    workSpace: "",
    country: { label: "", value: "" },
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Provide valid email")
      .required("Email is required"),
    workSpace: Yup.string().required("Workspace is required"),
    country: Yup.object().shape({
      value: Yup.string().required("Country is required"),
      label: Yup.string().required("Country is required"),
    }),
  });
  const authenticationPageImage = [
    { id: 1, image: akijCement },
    { id: 2, image: afbl },
    { id: 3, image: akijShipingLine },
    { id: 4, image: akijPolyFibre },
  ];

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

  return (
    <div
    // style={{ overflow: "hidden", background: "black" }}
    >
      <div>
        <h1 className="text-center">Create Account</h1>
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="row">
              <div className="col-12">
                <LoginInput
                  name="name"
                  label="Name"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  // disabled={true}
                />
                {formik.errors.name && formik.touched.name ? (
                  <MasterErrorText message={formik.errors.name} />
                ) : null}
              </div>
              <div className="col-12">
                <LoginInput
                  name="email"
                  label="Email"
                  type="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  disabled={false}
                />
                {formik.errors.email && formik.touched.email ? (
                  <MasterErrorText message={formik.errors.email} />
                ) : null}
              </div>
              <div className="col-12">
                <LoginInput
                  name="workSpace"
                  label="workSpace"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // value={formik.values.workSpace}
                  // disabled={true}
                />
                {formik.errors.workSpace && formik.touched.workSpace ? (
                  <MasterErrorText message={formik.errors.workSpace} />
                ) : null}
              </div>
            </div>
            <div>
              <button
                className="btn btn-primary mt-3"
                type="submit"
                // disabled={!formik.isValid || !formik.dirty}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="row p-4">
        {/* <div className="col-md-6"> */}
        {authenticationPageImage?.map((item, index) => (
          <div
            key={index}
            style={{
              background: "#FFFFFF",
              margin: "10px 6px",
              borderRadius: "10px",
            }}
          >
            <img className="img-responsive" src={item?.image} alt="" />
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
