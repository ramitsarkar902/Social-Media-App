import React from "react";
import "./rightbar.css";
import { Users } from "../../dummydata";
import Online from "../../components/online/Online";
function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <span className="birthdayText">
            <b>xyz</b>and <b>5 other friends</b> have a birthday today
          </span>
        </div>
        <h4 className="rightbarFriends">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((user, index) => {
            return <Online key={index} user={user} />;
          })}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {};
  console.log({ profile });
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
