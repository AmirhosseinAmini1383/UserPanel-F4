import React, { useEffect, useState } from "react";
import Trash from "../../css/Icons/trash.png";
import Edit from "../../css/Icons/edit.png";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../css/Icons/search.png";
import swal from "sweetalert";
import { getUserReq, setDeleteUser } from "../../Service/UserService";
const User = () => {
  const [Users, setUsers] = useState([]);
  const [MainUsers, setMainUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    getUserReq(setUsers, setMainUsers);
  }, []);
  const navigate = useNavigate();
  const EditUserNavigate = (itemId) => {
    navigate(`/user/add/${itemId}`);
  };

  const handleDeleteUser = (itemId) => {
    swal({
      title: "! حذف رکورد",
      text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        // axios({
        //   method: "DELETE",
        //   url: `https://jsonplaceholder.typicode.com/users/${itemId}`,
        // }).then((res) => {
        //   swal("حذف با موفقیت انجام شد", {
        //     icon: "success",
        //   });
        //   console.log(res);
        // });
        setDeleteUser(Users, setUsers, itemId);
      } else {
        swal("شما از حذف رکورد منصرف شدید", {
          buttons: "متوجه شدم",
          icon: "warning",
        });
      }
    });
  };
  const handleSearch = (e) => {
    setUsers(MainUsers.filter((u) => u.name.includes(e.target.value)));
    if (!Users.length - 1) {
      setLoading(false);
    }
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
              onChange={handleSearch}
            />
            <button className="btn-search">Search</button>
          </form>
        </div>
      </div>
      <div>
        <Link to="/user/add/" state={"AddUser"}>
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
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      <img
                        className="icon_table"
                        src={Trash}
                        alt="trash"
                        onClick={() => handleDeleteUser(user.id)}
                      />
                      <img
                        className="icon_table"
                        src={Edit}
                        alt="edit"
                        onClick={() => {
                          EditUserNavigate(user.id);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div>
          {Loading ? (
            <h4 className="waiting-status">لطفا منتظر بمانید</h4>
          ) : (
            <h4 className="waiting-status">جستوجو یافت نشد</h4>
          )}
        </div>
      )}
    </div>
  );
};
export default User;
