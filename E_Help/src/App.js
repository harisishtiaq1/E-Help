import { Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Login from "./Components/Login/Login";
import Signup from "./Components/signup/signup";
import Forgot from "./Components/Forgot/Forgot";
import Reset from "./Components/ResetPassword/Reset"
import ContactUS from "./Components/ContactUS/ContactUs"
import Profile from "./Components/Profile/Profile";
// import Question from "./Components/Question/Question"
import Answer from "./Components/Answer/Answer";
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
import UpdateProfile from "./Components/UpdateProfile/UpdateProfile";
import Header from "./Components/Header/Header";
import Question from "./Components/Add-Question/Question";
import ViewQuestion from "./Components/ViewQuestion";
import Stackoverflow from "./Components/Stackoverflow";
function App() {
  return (
  // <>
  //   <Toaster/>
  //   <Header/>
  
  //     <Routes>
  //     <Route path="/" exact={true} element={<Stackoverflow/>}/>
  //       <Route path="/login" exact={true} element={<Login/>} />
  //       <Route path="/signup" exact={true} element={<Signup/>}/>
  //       <Route path="/add-question" element={<Question/>}/>
  //     </Routes>
  //   </>
    // <Profile/>
    // <Question/>
    // <Login/>
    // <ContactUS/>
    // <UpdateProfile/>
    // <Header />
    <Signup/>
  );
}
export default App;
