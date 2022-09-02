import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import profileImg from "./../../Assets/img.png";
import { UserProfile } from "../PopUp/profilePopUp/userProfile";

const Navbar = () => {

  const [profileOpen, setProfileOpen] = useState(false);
  const toggle = () => setProfileOpen(!profileOpen)
  

  // useEffect (()=>{
  //   document.addEventListener(
  //     "mousedown", ()=>{
  //       profileOpen(toggle)
  //     }
  //   )
  // })

  return (
    <div
      className="text-danger d-flex flex-row justify-content-end navBar"
      style={{ width: "100%" }}
    >
      <div className="d-flex justify-content-center useNameCon">
        <div className="userName" onClick={() => setProfileOpen(true)}>User Name</div>
        <div style={{ margin: '-5px 0 0 0' }} >
          <img src={profileImg} alt="Avatar" className="avatar" onClick={toggle} />
        </div>
      </div>

      <div>
        <UserProfile profileOpen={profileOpen} onClose={() => setProfileOpen(false)}></UserProfile>
      </div>

    </div>
  );
};

export default Navbar;
