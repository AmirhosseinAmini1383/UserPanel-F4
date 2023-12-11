import React from "react";
import TodoIcon from "../../css/Icons/todo.png";
const Todo = () => {
  return (
    <div className="manage">
      <div>
        <img className="manage-icon" src={TodoIcon} alt="todo" />
        <p>Manage Todos</p>
      </div>
    </div>
  );
};
export default Todo;
