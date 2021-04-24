import "./App.css";
import SignUp from "./main/base-layout/Screens/SignUp";
import Login from "./main/base-layout/Screens/Login";
import "./App.css";
import MainLayout from "./main/base-layout/main-layout";
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'


function App() {
  const isLoged = useSelector(state => state.user.isAuth)
  return (
    <div>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {
        isLoged &&
        <MainLayout />
        ||
        <Login />
      }
      <ToastContainer />
    </div>
  );
}

export default App;
