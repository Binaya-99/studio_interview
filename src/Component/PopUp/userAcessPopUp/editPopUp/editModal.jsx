import React from "react";
// import { useState } from "react";

export const EditModal = ({ active, onClose }) => {
  if (!active) {
    return null;
  }
  return (
    <>
      <div className="modalWrapper">
        <div className="popup-box">
          <div className="popup-heading">
            <div className="newUser">Edit user</div>
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

            <div className="mb-4">
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

            <button type="submit" className="btn btn-primary btnStyle">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
