import React from "react";
import "../Login/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../slices/auth/authSlice";
function Login() {
  const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const signup = () => {
    let path = "/signup";
    navigate(path);
  };
  const forget = () => {
    let path = "/Forgot";
    navigate(path);
  };
  const onSubmit=(e)=>{
    e.preventDefault();
    dispatch(login({email,password}));
    setEmail("")
    setPassword("");
  }
  return (
    <div className="container-fluid">
      <div className="sigin-wrap">
        <div className="pad-content">
          <h2 className="text-center mb-3">Sign In</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
            Email Address:<input
                type="email"
                className="form-control"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                name="email"
              />
            </div>
            <div className="mb-3">
              Password:<input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
              />
            </div>
            <div className="d-flex justify-content-end mb-3">
              <a onClick={() => forget()} href="">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="btn mb-3" id="signin-btn">
              Sign In
            </button>
            <button type="submit" className="btn mb-3 clr" id="signin-btn">
              Sign in With Google
            </button>
            <div className="text-center">
              <span>
                {" "}
                New User?{" "}
                <a onClick={() => signup()} href="">
                  Create Account
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
