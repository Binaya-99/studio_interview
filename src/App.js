import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./Component/Dashboard";
import { Login } from "./Component/Login";
import { SignUp } from "./Component/SignUp";
import { UserAccess } from "./Component/UserAccess";
import Layout from "./Component/Layout/Layout";
import "./style/style.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="user-access" element={<UserAccess />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
