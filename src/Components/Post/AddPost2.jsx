import React, { useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router";
import {
  setPostService,
  updatePostService,
} from "../../Service/AddPostService";
import { jpAxios } from "../../Api/Axios/JpAxios";
import "./AddPost.css";
import { init, reducer } from "./PostReducer";
// useReduser
const AddPost2 = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [data, dispatch] = useReducer(reducer, init);

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!postId) {
      setPostService(data.postData);
    } else {
      updatePostService(data.postData, postId);
    }
  };

  const setInputValues = (e, propName) => {
    dispatch({
      type: "setInputValue",
      propName: propName,
      propValue: e.target.value,
    });
  };

  useEffect(() => {
    jpAxios
      .get("/users")
      .then((res) => {
        dispatch({
          type: "changeUser",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    if (postId) {
      jpAxios.get(`/posts/${postId}`).then((res) => {
        dispatch({
          type: "isUpdate",
          payload: res.data,
        });
      });
    }
  }, []);

  return (
    <div className="content-form">
      <h1>{postId ? "ویرایش کاربر" : "افزودن کاربر"}</h1>
      <div className="form">
        <form onSubmit={handleAddPost}>
          <div className="displayform">
            <label className="form-label">کاربر</label>
            <select
              className="form-control"
              value={data.postData.userId}
              onChange={(e) => setInputValues(e, "userId")}
            >
              <option value="">کاربر مورد نظر را انتخاب کنید</option>
              {data.users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name}
                </option>
              ))}
            </select>
          </div>
          <div className="displayform">
            <label className="form-label">آی دی کاربر</label>
            <input
              type="text"
              className="form-control"
              value={data.postData.userId}
              onChange={(e) => setInputValues(e, "userId")}
            />
          </div>
          <div className="displayform">
            <label className="form-label">عنوان</label>
            <input
              type="text"
              className="form-control"
              value={data.postData.title}
              onChange={(e) => setInputValues(e, "title")}
            />
          </div>
          <div className="displayform">
            <label className="form-label">متن اصلی</label>
            <textarea
              rows={5}
              type="email"
              className="form-control"
              value={data.postData.body}
              onChange={(e) => setInputValues(e, "body")}
            ></textarea>
          </div>
          <div className="btnform">
            <button
              type="button"
              className="btn Back"
              onClick={() => navigate(-1)}
            >
              بازگشت
            </button>
            <button type="submit" className="btn Add">
              {postId ? "ویرایش " : "افزودن "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost2;
