import logo from "./logo.svg";
import "./App.css";
import http from "./main/services/http/http-client";
import ls from "./main/services/local-storage";
// import {TOKEN,TOKEN1} from './main/constant/local-storage.contant'
import MasterInput from "./main/common/base-component/master-input";
import { useState } from "react";
import { Formik } from "formik";
import MasterSelect from "./main/common/base-component/master-select";
import * as Yup from "yup";
import akijCement from "./assets/image/authentication/akijCement.png";
import afbl from "./assets/image/authentication/afbl.png";
import akijShipingLine from "./assets/image/authentication/akijShipingLine.png";
import akijPolyFibre from "./assets/image/authentication/akijPolyFibre.png";

function App() {
  // http.de('https://jsonplaceholder.typicode.com/todos/1')
  // .then(res=>{
  //   console.log(res)
  // })
  // ls.setData(TOKEN,'aziz')
  const [name, setName] = useState("");
  function onChange(e) {
    setName(e.target.value);
  }

  //azizul code;
  const countryDDL = [
    { value: 1, label: "Bangladesh" },
    { value: 2, label: "India" },
    { value: 3, label: "China" },
  ];
  //initial values;
  const initialValues = {
    name: "",
    email: "",
    workSpace: "",
    country: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
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
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {}}
      >
        {({
          handleSubmit,
          resetForm,
          values,
          errors,
          touched,
          setFieldValue,
          isValid,
          dirty,
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              {console.log(values)}
              <div className="form-card">
                <div className="form-card-content">
                  <div className="row">
                    <div className="col-lg-3">
                      <MasterInput
                        label="Name"
                        name="name"
                        type="text"
                        value={name}
                        onChange={onChange}
                        // onChange={(value) => {
                        //   setFieldValue("name", value);
                        // }}
                      />
                      <MasterInput
                        label="Email"
                        name="email"
                        type="email"
                        value={values?.email}
                        // onChange={onChange}
                        onChange={(value) => {
                          setFieldValue("email", value);
                        }}
                      />
                      <MasterInput
                        label="Workspace"
                        name="workSpace"
                        type="text"
                        value={values?.workSpace}
                        // onChange={onChange}
                        onChange={(value) => {
                          setFieldValue("workSpace", value);
                        }}
                      />
                      <MasterSelect
                        label="Country"
                        name="country"
                        options={countryDDL || []}
                        id="country"
                        // type="text"
                        value={values?.country}
                        // onChange={onChange}
                        onChange={(value) => {
                          setFieldValue("country", value);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </>
        )}
      </Formik>
      {/* <div className="row">
        {authenticationPageImage?.map((item, index) => (
          <div
            style={{
              background: "red",
              margin: "10px 6px",
              borderRadius: "10px",
            }}
          >
            <img className="img-responsive" src={item?.image} alt="" />
          </div>
        ))}
      </div> */}
      <h3>THis is home page</h3>
    </>
  );
}

export default App;
