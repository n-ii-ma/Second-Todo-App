import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TaskList from "./components/TaskList";
import Form from "./components/Form";

const LOCAL_STORAGE_KEY = 'todoApp.tasks';

function App() {
  const [input, setInput] = useState("");
  const [remainingTasks, setRemainingTasks] = useState(0)
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks]);


  useEffect(() => {
    setRemainingTasks(tasks.filter((task) => !task.completed).length)
  }, [tasks]);

  const handleInput = (e) => setInput(e.target.value);

  const addTask = (e) => {
    e.preventDefault();

    if (!input) return;

    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        text: input,
        completed: false,
      },
    ]);

    setInput("");
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;

    setTasks(newTasks);
  };

  const handleRemove = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <header className="header">{`${remainingTasks} Left`}</header>
      <TaskList 
      tasks={tasks} 
      handleComplete={handleComplete} 
      handleRemove={handleRemove} 
      />
      <Form 
      input={input} 
      handleInput={handleInput} 
      addTask={addTask} 
      />
    </div>
  );
}

export default App;
