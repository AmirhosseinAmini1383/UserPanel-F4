import React from "react";
import Trash from "./css/Icons/trash.png";
import Edit from "./css/Icons/edit.png";

const User = () => {
  return (
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
                <img className="icon_table" src={Edit} alt="edit" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Amin</td>
              <td>Mohebi</td>
              <td>amin.mohebi@gmail.com</td>
              <td>
                <img className="icon_table" src={Trash} alt="trash" />
                <img className="icon_table" src={Edit} alt="edit" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default User;
