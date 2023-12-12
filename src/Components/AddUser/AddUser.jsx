import React from "react";
import "./AddUser.css";
import { Outlet, useNavigate, useParams } from "react-router-dom";
const AddUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  return (
    <div className="content-form">
      <h1>{userId ? "ویرایش کاربر" : "افزودن کاربر"}</h1>
      <div className="form">
        <div>
          <form>
            <div className="displayform">
              <label for="exampleInputEmail1" class="form-label">
                نام و نام خانوادگی
              </label>
              <input type="text" class="form-control" />
            </div>
            <div className="displayform">
              <label for="exampleInputEmail1" class="form-label">
                نام کاربری
              </label>
              <input type="text" class="form-control" />
            </div>
            <div className="displayform">
              <label for="exampleInputEmail1" class="form-label">
                ایمیل
              </label>
              <input type="email" class="form-control" />
            </div>
            <div className="displayAddress">
              <label for="exampleInputEmail1" class="form-label address">
                آدرس
              </label>
              <div>
                <input type="text" class="form-control" placeholder="شهر" />
              </div>
              <div>
                <input type="text" class="form-control" placeholder="خیابان" />
              </div>
              <div>
                <input
                  type="text"
                  class="form-control"
                  placeholder="ادامه آدرس"
                />
              </div>
              <div className="col-6 my-1">
                <input type="text" class="form-control" placeholder="کد پستی" />
              </div>
            </div>

            <div className="btnform">
              <button
                type="button"
                class="btn Back"
                onClick={() => {
                  navigate(-1);
                }}
              >
                بازگشت
              </button>
              <button type="submit" class="btn Add">
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
