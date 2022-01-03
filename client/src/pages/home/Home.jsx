import React from "react";
import Feed from "../../components/feeds/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed username="ramit" />
        <Rightbar profile={false} />
      </div>
    </div>
  );
}

export default Home;
