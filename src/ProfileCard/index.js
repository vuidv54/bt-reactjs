import React from "react";
import "./ProfileCard.css";

class ProfileCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card--header" />
        <img
          className="avatar"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="avatar"
        />
        <div className="card--body">
          <div>
            <p className="text-header">Ruma Khan</p>
            <p className="text-sub">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
            <button className="btn third">FOLLOW</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
