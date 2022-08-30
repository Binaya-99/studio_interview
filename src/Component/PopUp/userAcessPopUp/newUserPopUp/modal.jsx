import React from "react";
// import { useState } from "react";

export const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      <div className="modalWrapper">
        <div className="popup-boxNew">
          <div className="popup-heading">
            <div className="newUser">Add new user</div>
            <div>
              <button className="btn-close" onClick={onClose}></button>
            </div>
          </div>

          <form className="mt-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label labelStyle">
                User Name
              </label>
              <input
                type="email"
                className="form-control contentStyle"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label labelStyle">
                Email Id
              </label>
              <input
                type="email"
                className="form-control contentStyle"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label labelStyle">
                Select role
              </label>
              <select
                className="form-control form-select contentStyle"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
              >
                <option selected>Select role</option>
                <option value="1">Admin</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                for="exampleInputPassword1"
                className="form-label labelStyle"
              >
                Enter Password
              </label>
              <input
                type="password"
                className="form-control contentStyle"
                id="exampleInputPassword1"
              />
            </div>

            <button type="submit" className="btn btn-primary btnStyle">
              invite
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
