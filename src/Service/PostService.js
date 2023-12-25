import { jpAxios } from "../Api/Axios/JpAxios";
// Post Component
export const getPostReq = async (setPost, setMainPost) => {
  const res = await jpAxios.get("/posts");
  if (res.status == 200 || res.status == 201) {
    setPost(res.data);
    setMainPost(res.data);
  } else {
    console.log(res);
  }
};
// Post Component
export const getCommentReq = async (setComment, postId) => {
  const res = await jpAxios.get(`comments?postId=${postId}`);
  if (res.status == 200 || res.status == 201) {
    setComment(res.data);
  }
};
