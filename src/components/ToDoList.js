import React from 'react';
import ToDo from './ToDo';
import "../App.css";
 
const ToDoList = ({toDoList, handleToggle, handleDelete}) => { 
    console.log(handleDelete)
    return (
        <div className="listdiv">
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleDelete={handleDelete}/>
                )
            })}
        </div>
    );
};
 
export default ToDoList;