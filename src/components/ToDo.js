import React from "react";
import "../App.css";
import Delete from "./Delete";

const ToDo = ({ todo, handleToggle, handleDelete }) => {
  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id);
  };
  return (
    <div>
      <Delete id={todo.id} handleDelete={handleDelete} />
      <Edit id={todo.id} handleEdit={handleEdit} />
      <p
        id={todo.id}
        onClick={handleClick}
        className={todo.complete ? "strike" : ""}
      >
        {todo.task}
      </p>
    </div>
  );
};

export default ToDo;
