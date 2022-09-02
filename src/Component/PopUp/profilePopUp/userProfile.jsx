import React from "react";
// import { useState } from "react";
import profileImg from "../../../Assets/img.png";
import coverImg from "./../../../Assets/Cover.png";
import * as FaIcon from "react-icons/fi";
import * as FaIconAi from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export const UserProfile = ({ profileOpen, onClose }) => {
  const navigate = useNavigate();
  const nevigateToDeshboard = () => {
    navigate("/login");
  };
  if (!profileOpen) {
    return onClose;
  }
  return (
    <>
      <div className="UserModalWrapper">
        <div className="user-box">
          <img src={coverImg} className="backgroundImage"></img>
          <div className="profileImage">
            <img src={profileImg} alt="Avatar" className="popUpAvatar" />

            <div>
              <FaIcon.FiEdit2 className="editIconStyle profileEdit" />
            </div>
          </div>
          <div className="popUp-content">
            <div className="profile-head">Profile</div>

            <div className="textName">User Name</div>
            <div className="d-flex  justify-content-between">
              <div className="profileName">Rahul Sharma</div>
              <FaIcon.FiEdit2 className="editIconStyle" />
            </div>
            <div className="divider mb-2 mt-1"></div>

            <div className="textName">Email</div>
            <div className="d-flex  justify-content-between">
              <div className="profileName">rahul@gmail.com</div>
              <FaIcon.FiEdit2 className="editIconStyle" />
            </div>
            <div className="divider mb-2 mt-1"></div>

            <div
              className="d-flex  justify-content-between logOutSection"
              onClick={nevigateToDeshboard}
            >
              <div className="d-flex">
                <FaIcon.FiLogOut className="logOutImg" />
                <div className="logOutTxt">Logout</div>
                <FaIconAi.AiOutlineRight className="logoutArrow" />
              </div>
            </div>
            <div className="close" onClick = {onClose}>
              <FaIconAi.AiOutlineCloseCircle style={{margin: "0 0 0 9rem"}}  onClick = {onClose}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
