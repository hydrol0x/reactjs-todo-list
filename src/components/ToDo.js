import React from 'react';
import "../App.css" 
import Delete from './Delete';

const ToDo = ({todo, handleToggle, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        handleToggle(e.currentTarget.id);
    }
    console.log(handleDelete)
    return (
        <div id={todo.id} onClick={handleClick} className={todo.complete ? "strike" : ""}>
            <Delete id={todo.id} handleDelete={handleDelete} />
            <p>{todo.task}</p>
        </div>
    );
};
 
export default ToDo;