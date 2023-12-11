import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../../css/Style.css";
import Menu from "../../css/Icons/menu.png";
import User from "../../Components/User/User";
import { MainContext } from "../../Components/Context/MainContext";
import Todo from "../../Components/Todo/Todo";
import Gallery from "../../Components/Gallery/Gallery";
import Post from "../../Components/Post/Post";
import AddUser from "../../Components/AddUser/AddUser";
const Home = () => {
  const { showMenu, setShowMenu } = useContext(MainContext);
  const [isUser, setisUser] = useState(false);
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
            <Route path="/user/add" element={<AddUser />} />
            <Route path="/post" element={<Post />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="*" element={<User />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default Home;
