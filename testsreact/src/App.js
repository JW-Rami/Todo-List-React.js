import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [formState, setFormState] = useState({
    task: "",
  });
  const [stateTask, setStateTask] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      task: formState.task,
    };
    console.log(formData);
    setStateTask(formState.task)
  };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  return (
    <>
      <section className="page-container">
        <div className="todo-container">
          <form>
            <label>TO DO !</label>
            <input type="text" name="task" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}>
              Envoyer{" "}
            </button>
          </form>
          <div className="todolist-container">
            {/* <div className="task-container">{<p>{formState.task}</p>}</div> */}
            <div className="task-container2">{<p>{stateTask}</p>}</div>
            
          </div>
          
        </div>
      </section>
    </>
  );
}
export default App;
