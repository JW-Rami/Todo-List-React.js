import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [formState, setFormState] = useState({
    task: "",
  });
  const [stateTask, setStateTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      id: uuidv4(),
      task: formState.task,
    };
    console.log(formData);
    setStateTask(formState.task);
    setTasks([...tasks, formData.task]);
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
          {/* <div className="todolist-container">
            <div className="task-container2">{<p>{stateTask}</p>}</div>
            <div className="task-container2">{<p>{stateTask}</p>}</div>
          </div> */}
          <div className="todolist-container">
            {tasks.map((task) => (
              <div key={task.id} className="task-container">
                <p>{task.task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <div className="task-container">{<p>{formState.task}</p>}</div> */}
    </>
  );
}
export default App;
