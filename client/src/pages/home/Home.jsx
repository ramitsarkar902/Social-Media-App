import React from "react";
import Feed from "../../components/feeds/Feed";
import Topbar from "../../components/topbar/Topbar";
import "./home.css";

function Home() {
  return (
    <div>
      <Topbar />
      <div className="homeContainer">
        <Feed />
      </div>
    </div>
  );
}

export default Home;
