import "./App.css";
import SignUp from "./main/base-layout/Screens/SignUp";
import Login from "./main/base-layout/Screens/Login";
import "./App.css";
import MainLayout from "./main/base-layout/main-layout";
import { useSelector } from 'react-redux'
import lh from './main/services/local-storage'
function App() {
  const isLoged = useSelector(state => state.user.isAuth)
  // console.log()
  // const isLoged = lh.getData('user')?.auth?.token || false
  return (
    <div>
      {/* <SignUp /> */}
      {
        isLoged &&
        <MainLayout />
        ||
        <Login />
      }


    </div>
  );
}

export default App;
