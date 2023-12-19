import React, { useEffect, useState } from "react";
import Trash from "../../css/Icons/trash.png";
import Edit from "../../css/Icons/edit.png";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../css/Icons/search.png";
import swal from "sweetalert";
import axios from "axios";

const User = () => {
  // Promise
  // var promise = new Promise((resolvem, reject) => {
  //   console.log(1);
  //   setTimeout(() => {
  //     console.log(2);
  //     resolvem(true);
  //   }, 3000);
  // });
  // promise.then((res) => {
  //   console.log(3);
  //   console.log(res);
  // });

  // const func = () => {
  //   return new Promise((resolve, reject) => {
  //     console.log(1);
  //     setTimeout(() => {
  //       console.log(2);
  //       resolve(true);
  //     }, 3000);
  //   });
  // };
  // const test = async () => {
  //   const res = await func();
  //   if (res) {
  //     console.log(3);
  //     console.log(res);
  //   }
  // };
  // test();

  // await async
  // const prom = (id) => {
  //   return axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  // };
  // const func = async (id) => {
  //   await prom(id).then((res) => {
  //     console.log(res.data);
  //   });
  //   console.log(id);
  // };
  // for (const item of [1, 2, 3, 4, 5, 6, 7]) {
  //   func(item);
  // }

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
  const EditUserNavigate = (itemId) => {
    // Send Params With Navigate
    navigate(`/user/add/${itemId}`);
  };
  const handleDeleteUser = (itemId) => {
    swal({
      title: "! حذف رکورد",
      text: `آیا از حذف رکورد ${itemId} اطمینان دارید؟`,
      icon: "warning",
      buttons: true,
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
        axios
          .delete(`https://jsonplaceholder.typicode.com/users/${itemId}`)
          .then((res) => {
            if (res.status == 200) {
              const newUsers = Users.filter((user) => user.id != itemId);
              setUsers(newUsers);
              swal("حذف با موفقیت انجام شد", {
                icon: "success",
              });
            } else {
              swal("عملیات با خطا مواجه شد", {
                icon: "error",
              });
            }
          });
      } else {
        swal("شما از حذف رکورد منصرف شدید", {
          icon: "warning",
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
        <h4 className="waiting-status">...لطفا صبر کنید</h4>
      )}
    </div>
  );
};
export default User;
