import React from "react";
import Trash from "../../css/Icons/trash.png";
import Edit from "../../css/Icons/edit.png";
import { Link } from "react-router-dom";
import Search from "../../css/Icons/search.png";

const User = () => {
  return (
    <div>
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
        <Link to="/user/add">
          <button className="adduser">+</button>
        </Link>
      </div>
      <div className="user_context">
        <div className="table_user">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Amirhossein</td>
                <td>Amini</td>
                <td>amirhossein.amini83@gmail.com</td>
                <td>
                  <img className="icon_table" src={Trash} alt="trash" />
                  <Link to="/user/add/2">
                    <img className="icon_table" src={Edit} alt="edit" />
                  </Link>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Amin</td>
                <td>Mohebi</td>
                <td>amin.mohebi@gmail.com</td>
                <td>
                  <img className="icon_table" src={Trash} alt="trash" />
                  <Link to="/user/add/3">
                    <img className="icon_table" src={Edit} alt="edit" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default User;
