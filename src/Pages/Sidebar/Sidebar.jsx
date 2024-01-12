import React, { useContext } from "react";
import Image from "../../css/Images/profile.jpg";
import User from "../../css/Icons/user.png";
import Post from "../../css/Icons/post.png";
import Gallery from "../../css/Icons/gallery.png";
import Todo from "../../css/Icons/todo.png";
import Logout from "../../css/Icons/logout.png";
import "../../css/Style.css";
import { MainContext } from "../../Components/Context/MainContext";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/user"
            className={({ isActive }) => {
              return isActive ? "active-nav" : "";
            }}
          >
            <li className="li_content">
              <img className="icon" src={User} alt="user" />
              Users
            </li>
          </NavLink>
        </div>
        <div className="div_li">
          <NavLink
            to="/post"
            className={({ isActive }) => {
              return isActive ? "active-nav" : "";
            }}
          >
            <li className="li_content">
              <img className="icon" src={Post} alt="post" />
              Posts
            </li>
          </NavLink>
        </div>
        <div className="div_li">
          <NavLink
            to="/gallery"
            className={({ isActive }) => {
              return isActive ? "active-nav" : "";
            }}
          >
            <li className="li_content">
              <img className="icon" src={Gallery} alt="gallery" />
              Gallery
            </li>
          </NavLink>
        </div>
        <div className="div_li">
          <NavLink
            to="/todo"
            className={({ isActive }) => {
              return isActive ? "active-nav" : "";
            }}
          >
            <li className="li_content">
              <img className="icon" src={Todo} alt="todo" />
              Todos
            </li>
          </NavLink>
        </div>
        <div className="div_li">
          <NavLink
            to="/counter"
            className={({ isActive }) => {
              return isActive ? "active-nav" : "";
            }}
          >
            <li className="li_content">
              <img className="icon" src={Post} alt="post" />
              Counter
            </li>
          </NavLink>
        </div>
        <div className="div_li">
          <NavLink
            to="/logout"
            className={({ isActive }) => {
              return isActive ? "active-nav" : "";
            }}
          >
            <li className="li_content">
              <img className="icon" src={Logout} alt="logout" />
              Log Out
            </li>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};
export default Sidebar;
