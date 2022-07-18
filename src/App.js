import React, { useState, useEffect } from "react";
import data from "./data.json";

// Firestore DB
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firestore";

//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const tasksCollectionRef = collection(db, "tasks");
  useEffect(() => {
    const getTasks = async () => {
      const data = await getDocs(tasksCollectionRef);
      setToDoList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getTasks();
  }, []);

  const handleToggle = (id) => {
    let mapped = toDoList.map((task) => {
      return task.id === Number(id)
        ? { ...task, complete: !task.complete }
        : { ...task };
    });
    setToDoList(mapped);
  };

  const handleEdit = async (id, newTask) => {
    const userDoc = doc(db, "users", id);
    const newFields = { task: newTask };
    await updateDoc(userDoc, newFields);
  };

  const handleDelete = async (id) => {
    const userDoc = doc(db, "tasks", id);
    await deleteDoc(userDoc);
  };

  const addTask = async (userInput) => {
    await addDoc(tasksCollectionRef, { task: userInput, complete: false });
  };

  return (
    <div className="App">
      <Header />
      <ToDoForm addTask={addTask} />
      <ToDoList
        toDoList={toDoList}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
