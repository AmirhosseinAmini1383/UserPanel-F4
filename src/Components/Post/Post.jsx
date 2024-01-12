import React, { useEffect, useState } from "react";
import Trash from "../../css/Icons/trash.png";
import Edit from "../../css/Icons/edit.png";
import CommentIcon from "../../css/Icons/comments.png";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../css/Icons/search.png";
import { setDeleteUser } from "../../Service/UserService";
import { Alert, Confirm } from "../../Utils/SweetAlret";
import { getPostReq } from "../../Service/PostService";
import useTitle from "../../Hooks/useTitle";
const Post = () => {
  const [Post, setPost] = useState([]);
  const [MainPost, setMainPost] = useState([]);
  const [UserId, setUserId] = useState("");
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    getPostReq(setPost, setMainPost);
    // document.title = "Post";
  }, []);
  useTitle("Post");
  const navigate = useNavigate();
  const EditUserNavigate = (itemId) => {
    navigate(`/post/add/${itemId}`);
  };
  const handleDeleteUser = (itemId) => {
    Confirm(itemId).then((willDelete) => {
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
        setDeleteUser(Post, setPost, itemId);
      } else {
        Alert();
      }
    });
  };
  // const handleCheckComment = (postId) => {
  //   getCommentReq(setComment, postId);
  //   navigate(`/post/comment/${postId}`);
  // };
  const handleCheckComment = (postId) => {
    navigate(`/post/comment/${postId}`);
  };
  const handleSearch = () => {
    if (UserId > 0) setPost(MainPost.filter((u) => u.userId == UserId));
    else setPost(MainPost);
    if (Post.length) {
      setLoading(false);
    }
  };
  useEffect(() => {
    handleSearch();
  }, [UserId]);
  return (
    <div>
      <div className="section_header">
        <div className="header_content">
          <p className="p_manage">Manege Posts</p>
          <form className="search">
            <img className="img-search" src={Search} alt="Search" />
            <input
              className="input-search"
              type="number"
              placeholder="search..."
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              value={UserId}
            />
            <button className="btn-search">Search</button>
          </form>
        </div>
      </div>
      <div>
        <Link to="/post/add/" state={"AddUser"}>
          <button className="adduser">+</button>
        </Link>
      </div>
      {Post.length ? (
        <div className="user_context">
          <div className="table_user">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>UserId</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Operation</th>
                </tr>
              </thead>
              <tbody>
                {Post.map((post) => (
                  <tr key={post.id}>
                    <td className="td-padding">{post.id}</td>
                    <td
                      className="td-padding"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setUserId(post.userId);
                      }}
                    >
                      {post.userId}
                    </td>
                    <td className="td-padding txtalign-left">{post.title}</td>
                    <td className="td-padding txtalign-left">{post.body}</td>
                    <td>
                      <img
                        className="icon_table"
                        src={Trash}
                        alt="trash"
                        onClick={() => handleDeleteUser(post.id)}
                      />
                      <img
                        className="icon_table"
                        src={Edit}
                        alt="edit"
                        onClick={() => {
                          EditUserNavigate(post.id);
                        }}
                      />
                      <img
                        className="icon_table"
                        src={CommentIcon}
                        alt="comment"
                        onClick={() => {
                          handleCheckComment(post.id);
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
export default Post;
