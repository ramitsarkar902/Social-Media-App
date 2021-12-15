import React, { useState, useEffect } from "react";
import "./feed.css";
import { Posts } from "../../dummydata.js";
import Post from "../posts/Post";
import axios from "axios";
import Share from "../share/Share";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getFeedPosts = async () => {
      const res = await axios.get("posts/timeline/6183cb70cd3c7299f6f7de02");
      setPosts(res.data);
    };
    getFeedPosts();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((item, index) => (
          <Post key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
