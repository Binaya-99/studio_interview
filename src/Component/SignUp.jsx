import React from "react";
import loginImg from "./../Assets/login.png";
import logo from "./../Assets/logo.png";
import {useNavigate} from 'react-router-dom';

export const SignUp = () => {

  const navigate = useNavigate();
  const nevigateToLogin = () =>{
    navigate('/login');
  }
  const sectionStyle = {
    backgroundImage: `url(${loginImg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    
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
                alt="login image"
                width={"100%"}
                height={"100%"}
                className="img-fluid"
              />
            </div>
            <div className='headingStyle'>Interview Task</div>
          </div>
          {/* Sub-Heading  */}
          <div style={{ margin: "3rem 0 1rem 0" }}>
            <div className="loginText">Signup</div>
            <div className='loginSubTxt'>Enter Your Details</div>
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
                    Enter Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control inputStyle"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleInputEmail1"
                    className="form-label labelStyle"
                  >
                    Enter Your Email
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
                    type="password"
                    className="form-control inputStyle"
                    id="exampleInputPassword1"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary signInBtnStyle"
                  onClick={nevigateToLogin}
                >
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
