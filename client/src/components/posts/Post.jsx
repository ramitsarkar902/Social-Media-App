import React, { useState, useEffect } from "react";
import "./post.css";
import { Users } from "../../dummydata.js";
import { MoreVert } from "@material-ui/icons";

function Post({ item }) {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="profileImage"
              src={
                Users.filter((user) => user.id === item?.userId)[0]
                  .profilePicture
              }
              alt="hello"
            />
            <span className="postUsername">
              {Users.filter((user) => user.id === item?.userId)[0].username}
            </span>
            <span className="postDate">{item.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="icon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{item?.desc}</span>
          <img className="postImg" src={item.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" alt="" />
            <img className="likeIcon" src="assets/heart.png" alt="" />

            <span className="postLikeCounter">{item.like} likes</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{item.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
