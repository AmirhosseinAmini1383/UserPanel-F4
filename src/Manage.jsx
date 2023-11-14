import React from "react";
import User from "./css/Icons/user.png";
import Post from "./css/Icons/post.png";
import Gallery from "./css/Icons/gallery.png";
import Todo from "./css/Icons/todo.png";
const Manage = () => {
  return (
    <div className="manage_div">
      <div className="manage user">
        <div>
          <img className="manage-icon" src={User} alt="user" />
          <p>Manage Users</p>
        </div>
      </div>
      <div className="manage post">
        <div>
          <img className="manage-icon" src={Post} alt="post" />
          <p>Manage Posts</p>
        </div>
      </div>
      <div className="manage gallery">
        <div>
          <img className="manage-icon" src={Gallery} alt="gallery" />
          <p>Manage Gallerys</p>
        </div>
      </div>
      <div className="manage todo">
        <div>
          <img className="manage-icon" src={Todo} alt="todo" />
          <p>Manage Todos</p>
        </div>
      </div>
    </div>
  );
};
export default Manage;
