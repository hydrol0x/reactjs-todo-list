import React from "react";
import ToDo from "./ToDo";
import "../App.css";

const ToDoList = ({ toDoList, handleToggle, handleDelete, handleEdit }) => {
  return (
    <div className="listdiv">
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};

export default ToDoList;
