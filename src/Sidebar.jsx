import React, { useContext } from "react";
import Image from "./css/Images/profile.jpg";
import User from "./css/Icons/user.png";
import Post from "./css/Icons/post.png";
import Gallery from "./css/Icons/gallery.png";
import Todo from "./css/Icons/todo.png";
import Logout from "./css/Icons/logout.png";
import "./Style.css";
import { MainContext } from "./Context/MainContext";
import { Link } from "react-router-dom";

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
            <Link to="/">Users</Link>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Post} alt="post" />
            <Link to="/post">Posts</Link>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Gallery} alt="gallery" />
            <Link to="/gallery">Gallery</Link>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Todo} alt="todo" />
            <Link to="/todo">Todos</Link>
          </li>
        </div>
        <div className="div_li">
          <li className="li_content">
            <img className="icon" src={Logout} alt="logout" />
            <Link to="#">Log Out</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
