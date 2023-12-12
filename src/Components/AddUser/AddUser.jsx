import React from "react";
import "./AddUser.css";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
const AddUser = () => {
  const { userId } = useParams();
  const Params = useLocation();
  console.log(Params);
  const navigate = useNavigate();
  return (
    <div className="content-form">
      <h1>{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h1>
      <div className="form">
        <div>
          <form>
            <div className="displayform">
              <label className="form-label">نام و نام خانوادگی</label>
              <input type="text" className="form-control" />
            </div>
            <div className="displayform">
              <label className="form-label">نام کاربری</label>
              <input type="text" className="form-control" />
            </div>
            <div className="displayform">
              <label className="form-label">ایمیل</label>
              <input type="email" className="form-control" />
            </div>
            <div className="displayAddress">
              <label className="form-label address">آدرس</label>
              <div>
                <input type="text" className="form-control" placeholder="شهر" />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="خیابان"
                />
              </div>
              <div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ادامه آدرس"
                />
              </div>
              <div className="col-6 my-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="کد پستی"
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
  );
};
export default AddUser;
