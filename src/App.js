import "./App.css";
import SignUp from "./main/base-layout/Screens/SignUp";
import Login from "./main/base-layout/Screens/Login";
import "./App.css";
import MainLayout from "./main/base-layout/main-layout";
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {
        <MainLayout />
        ||
        <Login />
      }
      <ToastContainer />
    </div>
  );
}

export default App;
