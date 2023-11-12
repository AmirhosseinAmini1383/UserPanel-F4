import React from "react";
import Image from "./css/Images/profile.jpg";
import GifUser from "./css/Icons/user.gif";
import GifPost from "./css/Icons/post.gif";
import GifGallery from "./css/Icons/gallery.gif";
import GifTodo from "./css/Icons/todo.gif";
import GifLogout from "./css/Icons/logout.gif";
import "./Style.css";
const Sidebar = () => {
  return (
    <div className="sidebar_section">
      <ul className="ul_content">
        <div className="li_content">
          <li className="li_person">
            <img className="image_profile" src={Image} alt="Profile" />
            <p>Amirhossein Amini</p>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={GifUser} alt="user" />
            <a href="#">Users</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={GifPost} alt="post" />
            <a href="#">Posts</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={GifGallery} alt="gallery" />
            <a href="#">Gallery</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={GifTodo} alt="todo" />
            <a href="#">Todos</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={GifLogout} alt="logout" />
            <a href="#">Log Out</a>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
