import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import "../../css/Style.css";
import Menu from "../../css/Icons/menu.png";
import User from "../../Components/User/User";
import { MainContext } from "../../Components/Context/MainContext";
import Todo from "../../Components/Todo/Todo";
import Gallery from "../../Components/Gallery/Gallery";
import Post from "../../Components/Post/Post";
import AddUser from "../../Components/AddUser/AddUser";
import EditUser from "../../Components/EditUser/EditUser";
import LogOut from "../../Components/LogOut/LogOut";
import Comment from "../../Components/Post/Comment";
const Home = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  const handleShowMenu = (event) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
    console.log(showMenu);
  };
  return (
    <div>
      <div
        className="div_content"
        onClick={() => {
          setShowMenu(false);
        }}
      >
        <div>
          <img
            className="icon menu"
            src={Menu}
            alt="menu"
            onClick={handleShowMenu}
          />
        </div>
        <div>
          <Routes>
            {/* <Route
              path="/"
              element={isUser ? <User /> : <Navigate to="/gallery" />}
            /> */}
            <Route path="/user" element={<User />} />
            <Route path="/user/add" element={<AddUser />}>
              <Route path=":userId" element={<EditUser />} />
            </Route>
            <Route path="/post" element={<Post />} />
            <Route path="/post/comment" element={<Comment />}>
              <Route path=":postId" element={<Comment />} />
            </Route>
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="*" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Home;
