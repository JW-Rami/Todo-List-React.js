import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.css";

function ToDoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });
  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value });
  }
  function handleSumbit(e) {
    e.preventDefault();
    if (todo.task.trim) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <form onSubmit={handleSumbit}>
      <input
        name="task"
        value={todo.task}
        type="text"
        onChange={handleTaskInputChange}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default ToDoForm;
