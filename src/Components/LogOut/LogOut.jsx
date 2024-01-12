import React from "react";
import LogoutIcon from "../../css/Icons/logout.png";
import Counter from "./Counter";
import useTitle from "../../Hooks/useTitle";
const LogOut = () => {
  // useEffect(() => {
  //   document.title = "LogOut";
  // }, []);
  useTitle("LogOut");
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={LogoutIcon} alt="post" />
        <p>Log Out</p>
        <Counter />
      </div>
    </div>
  );
};
export default LogOut;
