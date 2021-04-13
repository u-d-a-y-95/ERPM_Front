import logo from './logo.svg';
import './App.css';
import http from './main/services/http/http-client'
import ls from './main/services/local-storage'
// import {TOKEN,TOKEN1} from './main/constant/local-storage.contant'
import MasterInput from './main/common/base-component/master-input'
import { useState } from 'react';

function App() {
  // http.de('https://jsonplaceholder.typicode.com/todos/1')
  // .then(res=>{
  //   console.log(res)
  // })
  // ls.setData(TOKEN,'aziz')
  const [name,setName] = useState("")
  function onChange (e) {
    setName(e.target.value)
  }
  return (
    <div>
      <MasterInput
        label="First Name"
        name="firstName"
        placeHolder="Enter your name"
        type="text"
        value={name}
        onChange = {onChange}
      />
    </div>
  );
}

export default App;
