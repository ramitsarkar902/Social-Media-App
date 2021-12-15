import React, { useState, useEffect } from "react";
import "./feed.css";
import Post from "../posts/Post";
import axios from "axios";
import Share from "../share/Share";
function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getFeedPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/6183cb70cd3c7299f6f7de02");
      setPosts(res.data);
    };
    getFeedPosts();
  }, [username]);
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
