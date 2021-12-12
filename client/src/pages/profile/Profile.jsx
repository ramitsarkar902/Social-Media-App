import React from "react";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feeds/Feed";
function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="cover">
              <img
                className="coverImage"
                src={`${PF}post/3.jpeg`}
                alt="profile cover pic"
              />
              <img
                className="userImage"
                src="data:image/png;base64,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"
                alt="user pic"
              />
            </div>
            <div className="profileInfo">
              <h3 className="profileInfoName">1234@Hawk</h3>
              <span className="profileInfoDesc">
                this has the profile description and introducing text
              </span>
            </div>
          </div>
          <div className="profileRightButtom">
            <Feed />
            <Rightbar profile={true} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
