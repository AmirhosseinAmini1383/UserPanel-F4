import React from "react";
import Trash from "../../css/Icons/trash.png";
import Edit from "../../css/Icons/edit.png";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../css/Icons/search.png";
import swal from "sweetalert";
const User = () => {
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
              <tr>
                <td>2</td>
                <td>Amin</td>
                <td>Mohebi</td>
                <td>amin.mohebi@gmail.com</td>
                <td>
                  <img
                    className="icon_table"
                    src={Trash}
                    alt="trash"
                    onClick={() => handleDelete(2)}
                  />

                  <img
                    className="icon_table"
                    src={Edit}
                    alt="edit"
                    onClick={EditUserNavigate}
                  />
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
