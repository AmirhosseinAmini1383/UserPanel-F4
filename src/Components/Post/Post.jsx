import React from "react";
import PostIcon from "../../css/Icons/post.png";
import ClickCount from "./ClickCount";
import HoverCount from "./HoverCount";
const Post = () => {
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={PostIcon} alt="post" />
        <p>Manage Posts</p>
        <ClickCount />
        <HoverCount />
      </div>
    </div>
  );
};
export default Post;
