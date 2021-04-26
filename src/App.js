import "./App.css";
import SignUp from "./main/base-layout/Screens/SignUp";
import Login from "./main/base-layout/Screens/Login";
import "./App.css";
import MainLayout from "./main/base-layout/main-layout";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

function App() {
  const isLogged = useSelector((state) => state.auth.isLogged);

  return (
    <div>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {(isLogged && <MainLayout />) || <Login />}
      <ToastContainer />
    </div>
  );
}

export default App;
