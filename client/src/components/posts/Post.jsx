import React, { useState, useEffect } from "react";
import "./post.css";
import { Users } from "../../dummydata.js";
import { MoreVert } from "@material-ui/icons";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
function Post({ item }) {
  const [like, setLike] = useState(item.likes.length);
  const [user, setUser] = useState({});

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${item.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [item.userId]);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img className="profileImage" src={user.profilePicture} alt="" />
            </Link>

            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(item.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="icon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{item?.desc}</span>
          <img className="postImg" src={PF + item.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}like.png`} alt="" />
            <img className="likeIcon" src={`${PF}heart.png`} alt="" />

            <span className="postLikeCounter">{like} likes</span>
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
