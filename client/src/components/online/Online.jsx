import React from "react";
import "./online.css";
function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImage"
          src={user.profilePicture}
          alt="imageProfile"
        />
        {user.online ? (
          <span className="rightbarOnline"></span>
        ) : (
          <span className="rightbarOffline"></span>
        )}
      </div>
      <span className="rightbarUsername">{user.userName}</span>
    </li>
  );
}

export default Online;
