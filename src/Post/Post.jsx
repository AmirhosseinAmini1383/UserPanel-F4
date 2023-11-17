import React from "react";
import PostIcon from "../css/Icons/post.png";
const Post = () => {
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={PostIcon} alt="post" />
        <p>Manage Posts</p>
      </div>
    </div>
  );
};
export default Post;
