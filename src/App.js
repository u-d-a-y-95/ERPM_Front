import "./App.css";
import SignUp from "./main/base-layout/Screens/SignUp";
import logo from "./logo.svg";
import "./App.css";
import http from "./main/services/http/http-client";
import ls from "./main/services/local-storage";
// import {TOKEN,TOKEN1} from './main/constant/local-storage.contant'
import MasterInput from './main/common/base-component/master-input'
import LoginInput from './main/common/base-component/login-input'
import { useState } from 'react';
import akijCement from "./assets/image/login-images/Artboard 11 copy 15@2x.png";
import assl from "./assets/image/login-images/ASSL.png";
import artboard from "./assets/image/login-images/Artboard 11 copy 10.png";
import artboard11 from "./assets/image/login-images/Artboard 11.png";
import { Formik } from "formik";
import * as Yup from "yup";
import { useFormik } from "formik";

function App() {
  return (
    <div>
      <SignUp />
    </div>
  );
  // const [name, setName] = useState("")

  // function onChange(e) {
  //   setName(e.target.value);
  // }
  return null;
}

export default App;
