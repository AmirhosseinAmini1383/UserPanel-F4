import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import {
  setPostService,
  updatePostService,
} from "../../Service/AddPostService";
import { jpAxios } from "../../Api/Axios/JpAxios";
import "./AddPost.css";

const AddPost = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({
    userId: "",
    id: "",
    title: "",
    body: "",
  });

  const handleAddPost = (e) => {
    e.preventDefault();
    if (!postId) {
      setPostService(data);
    } else {
      updatePostService(data, postId);
    }
  };

  useEffect(() => {
    jpAxios
      .get("/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (postId) {
      jpAxios.get(`/posts/${postId}`).then((res) => {
        setData(res.data);
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
              value={data.userId}
              onChange={(e) => setData({ ...data, userId: e.target.value })}
            >
              <option value="">کاربر مورد نظر را انتخاب کنید</option>
              {users.map((u) => (
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
              value={data.userId}
              onChange={(e) => setData({ ...data, userId: e.target.value })}
            />
          </div>
          <div className="displayform">
            <label className="form-label">عنوان</label>
            <input
              type="text"
              className="form-control"
              value={data.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
          </div>
          <div className="displayform">
            <label className="form-label">متن اصلی</label>
            <textarea
              rows={5}
              type="email"
              className="form-control"
              value={data.body}
              onChange={(e) => setData({ ...data, body: e.target.value })}
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

export default AddPost;
