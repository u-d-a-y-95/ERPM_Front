import logo from "./logo.svg";
import "./App.css";
import http from "./main/services/http/http-client";
import ls from "./main/services/local-storage";
// import {TOKEN,TOKEN1} from './main/constant/local-storage.contant'
import MasterInput from './main/common/base-component/master-input'
import LoginInput from './main/common/base-component/login-input'
import { useState } from 'react';
import MasterInput from "./main/common/base-component/master-input";
import { useState } from "react";
import akijCement from "./assets/image/login-images/Artboard 11 copy 15@2x.png";
import assl from "./assets/image/login-images/ASSL.png";
import artboard from "./assets/image/login-images/Artboard 11 copy 10.png";
import artboard11 from "./assets/image/login-images/Artboard 11.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";

function App() {
  // http.de('https://jsonplaceholder.typicode.com/todos/1')
  // .then(res=>{
  //   console.log(res)
  // })
  // ls.setData(TOKEN,'aziz')
  const [name, setName] = useState("")
  function onChange(e) {
    setName(e.target.value)
  }
  return (
    <div class="row">
      <div className="col-md-3 mx-5">
       <LoginInput 
          name="email"
          label="Email"
          type="text"
          value=""
          onChange=""
          placeHolder=""
          icon="fa fa-envelope"
       />
      </div>
    </div>
  );
  // const [name, setName] = useState("")

  // function onChange(e) {
  //   setName(e.target.value);
  // }
  return null;
}

export default App;
