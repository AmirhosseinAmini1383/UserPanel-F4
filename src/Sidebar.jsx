import React, { useContext } from "react";
import Image from "./css/Images/profile.jpg";
import User from "./css/Icons/user.png";
import Post from "./css/Icons/post.png";
import Gallery from "./css/Icons/gallery.png";
import Todo from "./css/Icons/todo.png";
import Logout from "./css/Icons/logout.png";
import "./Style.css";
import { MainContext } from "./Context/MainContext";
const Sidebar = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  return (
    <div className="sidebar_section" style={showMenu ? { left: 0 } : {}}>
      <ul className="ul_content">
        <div className="li_content">
          <li className="li_person">
            <img className="image_profile" src={Image} alt="Profile" />
            <p>Amirhossein Amini</p>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={User} alt="user" />
            <a href="#">Users</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Post} alt="post" />
            <a href="#">Posts</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Gallery} alt="gallery" />
            <a href="#">Gallery</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Todo} alt="todo" />
            <a href="#">Todos</a>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Logout} alt="logout" />
            <a href="#">Log Out</a>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
