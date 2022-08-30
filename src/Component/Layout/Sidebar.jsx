import React from "react";
import sidebarIcon from "./../../Assets/sidebar.png";
import logo from "./../../Assets/logo.png";
import dashboadLogo from "./../../Assets/dashboardLogo.png";
import userAccesUnselected from "./../../Assets/userAccesUnselected.png";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  return (
    <div
      className=" d-flex flex-column text-white sidebarStyling"
      style={{ width: "15rem", height: "100vh" }}
    >
      <div>
        <div className="d-flex flex-row" style={{ height: "4rem" }}>
          <div>
            <img src={sidebarIcon} alt="login image" className="sidebarLogo" />
          </div>
          <div className="logoItems">
            <div>
              <img src={logo} alt="login image" className="siderbar-header" />
            </div>
            <div className="sidebarHeader">Interview Task</div>
          </div>
        </div>
      </div>
      {/* <div className="d-flex flex-column" style={{ marginTop: '-4rem' }}>
        <div>
          <button type="button" className="btn btn-primary dashbordBtnStyle">
            <img src={dashboadLogo} className="daashboardBtnLogo" />
            Dashboard
          </button>
          <div>
            <div>
              <button type="button" className="btn btn-primary userAccdBtnStyle">
                <img src={userAccesUnselected} className="daashboardBtnLogo" />
                User Access
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div> */}
      <div>
        <ul>
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className = {val.cName}
                onClick={() => {
                  window.location.pathname = val.link;
                }}
              >
                {" "}
                <div className="d-flex flex-row btn userAccdBtnStyle" >
                  <div className="daashboardBtnLogo">{val.icon}</div>
                  <div>{val.title}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
