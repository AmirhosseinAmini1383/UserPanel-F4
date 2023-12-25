import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentReq } from "../../Service/PostService";

const Comment = () => {
  const { postId } = useParams();
  const [Comments, setComment] = useState([]);
  useEffect(() => {
    if (postId) {
      getCommentReq(setComment, postId);
    }
  }, []);
  return (
    <div>
      <div className="section_header">
        <div className="header_content">
          <p className="p_manage">Manege Comments</p>
        </div>
      </div>
      {Comments.length ? (
        <div className="user_context">
          <div className="table_user">
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>PostId</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Body</th>
                </tr>
              </thead>
              <tbody>
                {Comments.map((com) => (
                  <tr key={com.id}>
                    <td className="td-padding">{com.id}</td>
                    <td className="td-padding">{com.postId}</td>
                    <td className="td-padding">{com.name}</td>
                    <td className="td-padding">{com.email}</td>
                    <td className="td-padding">{com.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h4 className="waiting-status">لطفا منتظر بمانید</h4>
      )}
    </div>
  );
};

export default Comment;
