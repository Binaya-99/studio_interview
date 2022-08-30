import React from "react";
// import { useState } from "react";
import profileImg from "../../../Assets/img.png";
import logoutIcon from "./../../../Assets/logoutIcon.png"
import arrow from "./../../../Assets/arrow.png";
import vector from "./../../../Assets/Vector.png";
import coverImg from "./../../../Assets/Cover.png";
import * as FaIcon from "react-icons/fa"

export const UserProfile = ({ profileOpen, onClose }) => {
  if (!profileOpen) {
    return null;
  }
  return (
    <>
      <div className="UserModalWrapper">
        <div className="user-box">
          <img src={coverImg} className="backgroundImage"></img>
          <div className="profileImage">
            <img src={profileImg} alt="Avatar" className="popUpAvatar" />
          </div>

          <div className="popUp-content">
            <div className="profile-head">Profile</div>

            <div className="textName">User Name</div>
            <div className="d-flex  justify-content-between">
              <div className="profileName">Rahul Sharma</div>
              <img src={vector} alt="edit" className="editIconStyle" />
            </div>
            <div className="divider mb-2 mt-1"></div>

            <div className="textName">Email</div>
            <div className="d-flex  justify-content-between">
              <div className="profileName">rahul@gmail.com</div>
              <img src={vector} alt="edit" className="editIconStyle" />
            </div>
            <div className="divider mb-2 mt-1"></div>

            <div className="d-flex  justify-content-between">
              <div className="d-flex">
                <img src={logoutIcon} alt="logout" className="logOutImg"/>
                <div className="logOutTxt">Logout</div>
              </div>
                <img src={arrow} alt="logout" className="logoutArrow" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
