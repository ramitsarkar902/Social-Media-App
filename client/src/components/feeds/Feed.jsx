import React from "react";
import "./feed.css";
import { Posts } from "../../dummydata.js";
import Post from "../posts/Post";
function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        {Posts.map((item, index) => (
          <Post key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
