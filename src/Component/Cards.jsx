import React from "react";
import blueIcon from "./../Assets/blueIcon.png";
import blueIcon1 from "./../Assets/blueIcon1.png";
import blueIcon2 from "./../Assets/blueIcon2.png";
function Cards() {
  return (
    <div className="d-flex flex-row">
      <div className="card cardContainers">
        <div className="d-flex card-body cardStyle">
          <div>
            <img src={blueIcon} alt="blueIcon" />
          </div>
          <div className="d-flex flex-column">
            <div className="allUsersStyle">All Users</div>
            <div className="allUsersNoStyle">246</div>
          </div>
        </div>
      </div>
      <div className="card cardContainers">
        <div className="d-flex card-body adminCardStyle">
          <div>
            <img src={blueIcon1} alt="blueIcon" />
          </div>
          <div className="d-flex flex-column">
            <div className="allAdminStyle">Total Admin</div>
            <div className="allAdminNoStyle">246</div>
          </div>
        </div>
      </div>
      <div className="card cardContainers">
        <div className="d-flex card-body totalUserStyle">
          <div>
            <img src={blueIcon2} alt="blueIcon" />
          </div>
          <div className="d-flex flex-column">
            <div className="totalStyle">Total Admin</div>
            <div className="totalUserNoStyle">246</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
