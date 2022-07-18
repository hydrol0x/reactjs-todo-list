import { useState } from "react"
import React from 'react'

const ToDoForm = ({addTask}) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);  
        setUserInput("")      
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={userInput} placeholder="Add Task..."/>
            <button type="submit">Add</button>
        </form>
  )
}

export default ToDoForm