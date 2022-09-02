import React, { useState } from "react";
import sidebarIcon from "./../../Assets/sidebar.png";
import logo from "./../../Assets/logo.png";
import dashboadLogo from "./../../Assets/dashboardLogo.png";
import { NavLink } from "react-router-dom";
import * as FaIcon from "react-icons/md";
import { motion } from "framer-motion";
import userAccesUnselected from "./../../Assets/userAccesUnselected.png";
import {useNavigate} from 'react-router-dom';


const SidebarData = [
  {
      name: "Dashboard",
      icon: <FaIcon.MdDashboardCustomize/>,
      path: "/dashboard",
  },
  {
      name: "User Access",
      icon: <FaIcon.MdAccountCircle/>,
      path: "/user-access",
  }
]

const Sidebar = () => {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const nevigateToDeshboard = () =>{
    navigate('/dashboard');
  }


  return (
    <motion.div
      className=" text-white sidebarStyling"
      animate={{ width: isOpen ? "15rem" : "65px", height: "100vh" }}
    >
      <div>
        <div className="d-flex flex-row" style={{ height: "4rem" }}>
          <div>
            <img src={sidebarIcon} alt="login image" className="sidebarLogo"   onClick={toggle}/>
          </div>
          <div className="logoItems" onClick={nevigateToDeshboard}>
            <div>
              <img src={logo} alt="login image" className="siderbar-header" />
            </div>
            <div className="sidebarHeader">Interview Task</div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {SidebarData.map((route) => {
            return (
              <NavLink
              to = {route.path}
                key={route.name}
                className = {isOpen ? "link" : "notOpned"}>
                  <div className="daashboardBtnLogo">{route.icon}</div>
                  {isOpen && <div className="deshboardTxt">{route.name}</div>}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
