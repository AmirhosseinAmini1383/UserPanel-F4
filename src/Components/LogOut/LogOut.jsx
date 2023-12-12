import React from "react";
import LogoutIcon from "../../css/Icons/logout.png";
const LogOut = () => {
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={LogoutIcon} alt="post" />
        <p>Log Out</p>
      </div>
    </div>
  );
};
export default LogOut;
