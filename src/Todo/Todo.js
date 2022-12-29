import React from "react";
import "./Todo.css";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div className="list-container" style={{ display: "flex" }}>
      <div className="task-and-checkbox">
        <input
          className="checkbox-input"
          type="checkbox"
          onClick={handleCheckboxClick}
        />
        <li
          style={{
            textDecoration: todo.completed ? "line-through" : null,
          }}
        >
          <div className="text-todo">

          {todo.task}
          </div>
        </li>
      </div>

      <button className="delete-button" onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
}

export default Todo;
