import swal from "sweetalert";
import { jpAxios } from "../Api/Axios/JpAxios";
// User component
export const getUserReq = async (setUsers, setMainUsers) => {
  const res = await jpAxios.get("/users");
  if (res) {
    setUsers(res.data);
    setMainUsers(res.data);
  }
};
// User component
export const setDeleteUser = async (Users, setUsers, itemId) => {
  const res = await jpAxios.delete(`/users/${itemId}`);
  if (res) {
    if (res.status == 200 || res.status == 201) {
      const newUsers = Users.filter((user) => user.id != itemId);
      setUsers(newUsers);
      swal("حذف با موفقیت انجام شد", {
        buttons: "متوجه شدم",
        icon: "success",
      });
    } else {
      swal("عملیات با خطا مواجه شد", {
        buttons: "متوجه شدم",
        icon: "error",
      });
    }
  }
};
// AddUser Component
export const setUserService = async (Data) => {
  const res = await jpAxios.post("/users", Data);
  if (res) {
    if (res.status == 201 || res.status == 200) {
      swal(`${res.data.name} با موفقیت ایجاد شد`, {
        icon: "success",
        buttons: "متوجه شدم",
      });
    }
  }
};
// AddUser Component
export const updateUserService = async (userId, Data) => {
  const res = await jpAxios.put(`/users/${userId}`, Data);
  if (res) {
    if (res.status == 201 || res.status == 200) {
      swal(`${res.data.name} با موفقیت ویرایش شد`, {
        icon: "success",
        buttons: "متوجه شدم",
      });
    }
  }
};
// AddUser Component
export const getUserService = async (userId, setData) => {
  const res = await jpAxios.get(`/users/${userId}`);
  if (res) {
    setData({
      name: res.data.name,
      username: res.data.username,
      email: res.data.email,
      address: {
        street: res.data.address.street,
        city: res.data.address.city,
        suite: res.data.address.suite,
        zipcode: res.data.address.zipcode,
      },
    });
  }
};
