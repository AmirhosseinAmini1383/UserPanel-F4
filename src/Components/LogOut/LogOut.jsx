import React from "react";
import LogoutIcon from "../../css/Icons/logout.png";
import Counter from "./Counter";
const LogOut = () => {
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
