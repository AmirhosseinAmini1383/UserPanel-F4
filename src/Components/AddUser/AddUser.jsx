import React, { useEffect, useState } from "react";
import "./AddUser.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";
const AddUser = () => {
  // دریافت پارامتر های ارسال شده از کامپوننت یوزر
  const { userId } = useParams();
  // const Params = useLocation();
  // console.log(Params);
  const navigate = useNavigate();
  // برای پیام لطفا منتظر بمانید در صفحه فرم ویرایش
  const [loading, setLoading] = useState(true);
  // مقداری که داخل اینپوت هامون قرار میگیرن
  const [Data, setData] = useState({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      city: "",
      suite: "",
      zipcode: "",
    },
  });
  // اگر یوزرایدی پارامتری داخلش بود و مقدارش ترو بود  متود پوت رو اجرا کن در غیر این صورت متود پست رو اجرا کن
  // ارسال اطلاعات جدید یا ویرایش شده
  const handleAddUser = (e) => {
    e.preventDefault();
    // console.log(Data);
    if (userId) {
      axios
        .put(`https://jsonplaceholder.typicode.com/users/${userId}`, Data)
        .then((res) => {
          console.log(res);
          swal(`${res.data.name} با موفقیت ویرایش شد`, {
            icon: "success",
            buttons: "متوجه شدم",
          });
        });
    } else {
      axios
        .post("https://jsonplaceholder.typicode.com/users", Data)
        .then((res) => {
          if (res.status == 201) {
            swal(`${res.data.name} با موفقیت ایجاد شد`, {
              icon: "success",
              buttons: "متوجه شدم",
            });
          }
        });
    }
  };
  // اگر یوزرایدی پارامتری داخلش بود و مقدارش ترو بود اطلاعات کاربر مدنظر رو بگیر و اطلاعات رو بریز داخل اینپوت هامون
  // مقدار استیت لودینگ هم فالس میشه و دیگه نمایش داده نمیشه
  useEffect(() => {
    if (userId) {
      axios
        .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res) => {
          console.log(res);
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
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);
  return (
    <div className="content-form">
      <h1>{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h1>
      {loading ? (
        <h4 className="waiting-status">...لطفا صبر کنید</h4>
      ) : (
        <div>
          <div className="form">
            <div>
              <form onSubmit={handleAddUser}>
                <div className="displayform">
                  <label className="form-label">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Data.name}
                    onChange={(e) => {
                      setData({ ...Data, name: e.target.value });
                    }}
                  />
                </div>
                <div className="displayform">
                  <label className="form-label">نام کاربری</label>
                  <input
                    type="text"
                    className="form-control"
                    value={Data.username}
                    onChange={(e) => {
                      setData({ ...Data, username: e.target.value });
                    }}
                  />
                </div>
                <div className="displayform">
                  <label className="form-label">ایمیل</label>
                  <input
                    type="email"
                    className="form-control"
                    value={Data.email}
                    onChange={(e) => {
                      setData({ ...Data, email: e.target.value });
                    }}
                  />
                </div>
                <div className="displayAddress">
                  <label className="form-label address">آدرس</label>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="شهر"
                      value={Data.address.city}
                      onChange={(e) => {
                        setData({
                          ...Data,
                          address: { ...Data.address, city: e.target.value },
                        });
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="خیابان"
                      value={Data.address.street}
                      onChange={(e) => {
                        setData({
                          ...Data,
                          address: { ...Data.address, street: e.target.value },
                        });
                      }}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ادامه آدرس"
                      value={Data.address.suite}
                      onChange={(e) => {
                        setData({
                          ...Data,
                          address: { ...Data.address, suite: e.target.value },
                        });
                      }}
                    />
                  </div>
                  <div className="col-6 my-1">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="کد پستی"
                      value={Data.address.zipcode}
                      onChange={(e) => {
                        setData({
                          ...Data,
                          address: { ...Data.address, zipcode: e.target.value },
                        });
                      }}
                    />
                  </div>
                </div>

                <div className="btnform">
                  <button
                    type="button"
                    className="btn Back"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    بازگشت
                  </button>
                  <button type="submit" className="btn Add">
                    {userId ? "ویرایش" : "ذخیره"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};
export default AddUser;
