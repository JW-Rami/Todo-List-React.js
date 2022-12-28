import React from "react";
import "./Todo.css";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick(){
    removeTodo(todo.id);
  }

  return (
    <div  className="list-container" style={{display: "flex"}}>
      <input type="checkbox" onClick={handleCheckboxClick} />
      <li
      style={{color:"white", textDecoration: todo.completed ? "line-through" : null}}
      >{todo.task}</li>
      <button className="delete-button" onClick={handleRemoveClick}>X</button>
    </div>
  );
}

export default Todo;
