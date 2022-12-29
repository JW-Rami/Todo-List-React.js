import "./App.css";
import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { useEffect } from "react";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";
function App() {
  const [todos, setTodos] = useState([]);
  // -----------------------------------
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  // ----------------------------------

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }
  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <>
    <div className="App">
      <div className="todo-title">
        <h1>TO DO LIST</h1>
      </div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
        />
    </div>
    <div className="error-mobile">
      <div>

      The Todo List website is for dekstop format. <br /><br /><br /> Increase the window's size or run it on dekstop.
      </div>
    </div>
        </>
  );
}

export default App;
