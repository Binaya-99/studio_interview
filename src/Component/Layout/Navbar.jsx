import React from "react";
import { useState } from "react";
import profileImg from "./../../Assets/img.png";
import { UserProfile } from "../PopUp/profilePopUp/userProfile";

const Navbar = () => {

  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div
      className="text-danger d-flex flex-row justify-content-end navBar"
      style={{ width: "100%" }}
    >
      <div className="d-flex justify-content-center useNameCon">
        <div className="userName">User Name</div>
        <div style={{ margin: '-5px 0 0 0' }} >
          <img src={profileImg} alt="Avatar" className="avatar" onClick={() => setProfileOpen(true)} />
        </div>
      </div>

      <div>
        <UserProfile profileOpen={profileOpen} onClose={() => setProfileOpen(false)}></UserProfile>
      </div>

    </div>
  );
};

export default Navbar;
