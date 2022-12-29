import React from "react";
import "./Todo.css";
import { useState } from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  const handleModifierTodo = () => {
    setModifierTodo(true);
  };
  const [modifierTodo, setModifierTodo] = useState(false);

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
            {/* {modifierTodo ? (
              <>
                <form>
                  <input type="text" defaultValue={todo.task} />
                </form>
              </>
            ) : (
              <></>
            )} */}
            {todo.task}
            {/* <button onClick={handleModifierTodo}>modif</button> */}
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
