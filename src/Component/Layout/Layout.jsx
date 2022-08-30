import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = (props) => {
  return (
    <div
      className="d-flex flex-row"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <div>
        <Sidebar />
      </div>
      <div className="container-fluid p-0">
        <Navbar />
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
