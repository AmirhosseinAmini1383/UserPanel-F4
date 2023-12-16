import React, { useEffect, useState } from "react";
import Trash from "../../css/Icons/trash.png";
import Edit from "../../css/Icons/edit.png";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../css/Icons/search.png";
import swal from "sweetalert";
import axios from "axios";

const User = () => {
  const [Users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useNavigate();
  const EditUserNavigate = () => {
    // Send Params With Navigate
    navigate("/user/add/3", {
      state: { x: "React", y: "Angular" },
    });
  };
  const handleDelete = (itemId) => {
    swal({
      title: "! حذف رکورد",
      text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("حذف با موفقیت انجام شد", {
          icon: "success",
        });
      } else {
        swal("شما از حذف رکورد منصرف شدید", {
          icon: "error",
        });
      }
    });
  };
  return (
    <div>
      <div className="section_header">
        <div className="header_content">
          <p className="p_manage">Manege Users</p>
          <form className="search">
            <img className="img-search" src={Search} alt="Search" />
            <input
              className="input-search"
              type="text"
              placeholder="search..."
            />
            <button className="btn-search" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>
        {/* Send Params With Link */}
        <Link to="/user/add" state={"AddUser"}>
          <button className="adduser">+</button>
        </Link>
      </div>
      {Users.length ? (
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
                {Users.map((user) => (
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <img
                        className="icon_table"
                        src={Trash}
                        alt="trash"
                        onClick={() => handleDelete(1)}
                      />
                      <img
                        className="icon_table"
                        src={Edit}
                        alt="edit"
                        onClick={EditUserNavigate}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h4 className="waiting-status">...لطفا صبر کنید</h4>
      )}
    </div>
  );
};
export default User;
