import logo from './logo.svg';
import './App.css';
import http from './main/services/http/http-client'
import ls from './main/services/local-storage'
// import {TOKEN,TOKEN1} from './main/constant/local-storage.contant'
import MasterInput from './main/common/base-component/master-input'
import LoginInput from './main/common/base-component/login-input'
import { useState } from 'react';

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
}

export default App;
