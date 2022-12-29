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
    // max length
    if (e.target.value.length > 25) {
      console.log("message d'erreur");
      setIsMaxLengthReached(true);
    } else if (e.target.value.length < 25) {
      console.log("pas de message derreur");
      setIsMaxLengthReached(false);
    }
  }

  const [isMaxLengthReached, setIsMaxLengthReached] = useState(false);
  function handleSumbit(e) {
    e.preventDefault();
    if (todo.task.trim) {
      addTodo({ ...todo, id: uuidv4() });
      // reset task input
      setTodo({ ...todo, task: "" });
    }
  }
  return (
    <>
      <form onSubmit={handleSumbit}>
        <input
          name="task"
          value={todo.task}
          type="text"
          onChange={handleTaskInputChange}
          maxLength="26"
        />
        <button type="submit">Ajouter</button>
      </form>
      {isMaxLengthReached ? (
        <>
          <p className="error-length">
            Vous avez atteint le nombre maximum de caractères 
          </p>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default ToDoForm;
