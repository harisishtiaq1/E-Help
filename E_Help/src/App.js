import { Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/signup/signup";
import Forgot from "./Components/Forgot/Forgot";
import Reset from "./Components/ResetPassword/Reset"
import ContactUS from "./Components/ContactUS/ContactUs"
import Profile from "./Components/Profile/Profile";
import Question from "./Components/Question/Question"
import Answer from "./Components/Answer/Answer";
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
function App() {
  return (<>
    <Toaster/>
      <Routes>
        <Route path="/" exact={true} element={<Login/>} />
        <Route path="/profile" exact={true} element={<Profile/>}/>
        <Route path="/Signup" exact={true} element={<Signup/>} />
        <Route path="/Forgot" exact={true} element={<Forgot/>} />
        <Route path="/" exact={true} element={<Forgot/>} />
        <Route path="/reset" exact={true} element={<Reset/>}/>
      </Routes>
    </>
    // <Profile/>
    // <Question/>
    // <Login/>
    // <ContactUS/>

  );
}
export default App;
