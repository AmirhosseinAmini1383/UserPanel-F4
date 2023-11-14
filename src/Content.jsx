import React, { useContext } from "react";
import "./Style.css";
import Search from "./css/Icons/search.png";
import Menu from "./css/Icons/menu.png";
import User from "./User";
import Manage from "./Manage";
import { MainContext } from "./Context/MainContext";
const Content = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <div>
      <div
        className="div_content"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        <div>
          <img
            className="icon menu"
            src={Menu}
            alt="menu"
            onClick={handleShowMenu}
          />
        </div>
        <div className="section_header">
          <div className="header_content">
            <p className="p_manage">Manege Users</p>
            <form class="search">
              <img className="img-search" src={Search} alt="Search" />
              <input class="input-search" type="text" placeholder="search..." />
              <button class="btn-search" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div>
          <User />
          <Manage />
        </div>
      </div>
    </div>
  );
};
export default Content;
