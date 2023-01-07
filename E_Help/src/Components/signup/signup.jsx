import React from 'react'
import "../Login/Login.css";
import {useState} from "react"
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux"
import {register} from "../../slices/auth/authSlice"
function Signup() {
    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const nevigate=useNavigate();
    const dispatch=useDispatch();
    const login=()=>{
        let path="/";
        nevigate(path);
      }
      const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(register({Name,Email,Password}));
        setName("");
        setEmail("")
        setPassword("");
      }
    return (
        <div className="container-fluid">
            <div className="sigin-wrap">
                <div className="pad-content">
                    <h2 className="text-center mb-3">Sign Up</h2>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                               value={Name}
                               onChange={(e)=>setName(e.target.value)}
                               name="name"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Email Address"
                                value={Email}
                               onChange={(e)=>setEmail(e.target.value)}
                               name="email"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                placeholder="Password"
                                className="form-control"
                                value={Password}
                               onChange={(e)=>setPassword(e.target.value)}
                               name="password"
                            />
                        </div>

                        <button type="submit" className="btn mb-3" id="signup-btn">
                            Sign Up
                        </button>
                        <button type="submit" className="btn mb-3 clr" id="signup-btn">
                        Sign up With Google
                        </button>
                        <div className="text-center">
                            <span>Already have an account? <a onClick={()=>login()} href="">Login</a></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup