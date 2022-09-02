import React from "react";
import { useState } from "react";
import { Modal } from "./PopUp/userAcessPopUp/newUserPopUp/modal";
import { EditModal } from "./PopUp/userAcessPopUp/editPopUp/editModal";

export const UserAccess = () => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="userBar">
        <div className="userFont">User Access</div>
        <button
          type="button"
          className="btn btn-primary newButton"
          onClick={() => setShow(true)}
        >
          + New User
        </button>
      </div>
      <div className="mainContent">
        <div className="container">
          <div className="tableContent">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="user">
                    User Name
                  </th>
                  <th scope="col" className="email">
                    Email
                  </th>
                  <th scope="col" className="role">
                    Role
                  </th>
                  <th scope="col" className="status">
                    Status
                  </th>
                  <th scope="col" className="action">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>rahul@gmail.com</td>
                  <td>Admin</td>
                  <td>invited</td>
                  <td className="d-flex">
                    <div>
                      <button
                        type="button"
                        className="btn editButton"
                        onClick={() => setActive(true)}
                      >
                        Edit
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn deleteButton">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>rahul@gmail.com</td>
                  <td>User</td>
                  <td>Registered</td>
                  <td className="d-flex">
                    <div>
                      <button
                        type="button"
                        className="btn editButton"
                        onClick={() => setActive(true)}
                      >
                        Edit
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn deleteButton">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Rahul Sharma</td>
                  <td>rahul@gmail.com</td>
                  <td>User</td>
                  <td>invited</td>
                  <td className="d-flex">
                    <div>
                      <button
                        type="button"
                        className="btn editButton"
                        onClick={() => setActive(true)}
                      >
                        Edit
                      </button>
                    </div>
                    <div>
                      <button type="button" className="btn deleteButton">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Modal show={show} onClose={() => setShow(false)}></Modal>
        </div>

        <div>
          <EditModal
            active={active}
            onClose={() => setActive(false)}
          ></EditModal>
        </div>
      </div>
    </>
  );
};
