import React, { useState, useEffect } from "react";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feeds/Feed";
import { useParams } from "react-router";
import axios from "axios";
function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const params = useParams();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${params.username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [params.username]);
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
                src={user.coverPicture || `${PF}post/3.jpeg`}
                alt="profile cover pic"
              />
              <img
                className="userImage"
                src={user.profilePicture}
                alt="profileimg"
              />
            </div>
            <div className="profileInfo">
              <h3 className="profileInfoName">{user.username}</h3>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightButtom">
            <Feed username={params.username} />
            <Rightbar profile={true} user={user} />
            {/* need modifications later */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
