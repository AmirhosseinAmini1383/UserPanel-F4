import React from "react";
import TodoIcon from "../../css/Icons/todo.png";
import ClickCount from "../HOC/ClickCount";
import HoverCount from "../HOC/HoverCount";
import Parent from "./Parent";

const Todo = () => {
  return (
    <div className="grid-temp">
      <div className="manage">
        <div>
          <img className="manage-icon" src={TodoIcon} alt="todo" />
          <p>Manage Todos</p>
        </div>
        <ClickCount />
        <HoverCount />
      </div>
      <div className="bg-title">
        <Parent />
      </div>
    </div>
  );
};
export default Todo;
