import React from "react";
import "./feed.css";
import { Posts } from "../../dummydata.js";
import Post from "../posts/Post";
import Share from "../share/Share";
function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {Posts.map((item, index) => (
          <Post key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
