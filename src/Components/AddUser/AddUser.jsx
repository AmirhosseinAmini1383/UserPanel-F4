import React, { useEffect, useState } from "react";
import "./AddUser.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  getUserService,
  setUserService,
  updateUserService,
} from "../../Service/UserService";
const AddUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
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
  const handleAddUser = (e) => {
    e.preventDefault();
    if (userId) {
      updateUserService(userId, Data);
    } else {
      setUserService(Data);
    }
  };
  useEffect(() => {
    if (userId) {
      getUserService(userId, setData);
      setLoading(false);
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
