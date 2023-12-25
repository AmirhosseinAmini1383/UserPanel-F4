import React from "react";
import TodoIcon from "../../css/Icons/todo.png";
import ClickCount from "../HOC/ClickCount";
import HoverCount from "../HOC/HoverCount";

const Todo = () => {
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={TodoIcon} alt="todo" />
        <p>Manage Todos</p>
        <ClickCount />
        <HoverCount />
      </div>
    </div>
  );
};
export default Todo;
