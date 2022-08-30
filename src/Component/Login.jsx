import React from "react";
import loginImg from "./../Assets/login.png";
import logo from "./../Assets/logo.png";
import * as FaIcon from "react-icons/ai";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';


export const Login = () => {
  
  const [state, setState] = useState(false);

  const navigate = useNavigate();
  const nevigateToDeshboard = () =>{
    navigate('/dashboard');
  }

  const toggleBtn = () => {
    setState((prevState) => !prevState);
  };
  const sectionStyle = {
    backgroundImage: `url(${loginImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
    <div className="d-flex flex-row">
      <div className="w-50 vh-100" style={sectionStyle}></div>
      <div
        className="w-50"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ width: "460px" }}>
          {/* Heading */}
          <div
            className="d-flex flex-row"
            style={{ gap: "10px", margin: "3rem 0 1rem 0" }}
          >
            <div style={{ height: "44px", width: "44px" }}>
              <img
                src={logo}
                alt="login img"
                width={"100%"}
                height={"100%"}
                className="img-fluid"
              />
            </div>
            <div className="headingStyle">Interview Task</div>
          </div>
          {/* Sub-Heading  */}
          <div style={{ margin: "3rem 0 1rem 0" }}>
            <div className="loginText">Login</div>
            <div className="loginSubTxt">Sign in to your account</div>
          </div>
          {/* login form */}
          <div style={{ margin: "3rem 0 1rem 0" }}>
            <div style={{ width: "460px" }}>
              <form>
                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label labelStyle"
                  >
                    Email ID
                  </label>
                  <input
                    type="email"
                    className="form-control inputStyle"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-5">
                  <label
                    for="exampleInputPassword1"
                    className="form-label labelStyle"
                  >
                    Password
                  </label>
                  <input
                    type= {state ? "text" : "password"}
                    className="form-control inputStyle"
                    id="exampleInputPassword1"
                  />
                    <FaIcon.AiOutlineEye  className="eyeBtn" onClick={toggleBtn}/>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary signInBtnStyle"
                  onClick={nevigateToDeshboard}
                >
                  Sign In
                </button>
                <div className="forget d-flex justify-content-end">
                  <span>Forget Password?</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
