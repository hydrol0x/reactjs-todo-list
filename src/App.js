import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
 
import './App.css';
 
function App() {
  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleDelete = (id) =>{
    const removeItem = toDoList.filter((task) => {
      return task.id !== id;
    });
    setToDoList(removeItem);
  }

  const [ toDoList, setToDoList ] = useState(data);

  return (
   <div className="App">
     <Header />
     <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete}/>
   </div>
 );
}
 
export default App;