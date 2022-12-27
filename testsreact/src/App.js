import "./App.css";
import { useState } from "react";
import ToDoList from "./ToDoList.js/ToDoList";
import { v4 as uuidv4 } from "uuid";
import Beta from "./Beta/Beta";
function App() {
  const [formState, setFormState] = useState({
    task: "",
    id: uuidv4(),
  });

  // const [stateTask, setStateTask] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      task: formState.task,
      id: formState.id,
    };
    // setStateTask(formState.task, formData.id);
    setTasks([...tasks, formData.task]);
    console.log(formData.id);
  };
  const handleDelete = (id) => {
    const filtrerEtat = formState.filter((task) => {
      return task.id !== id;
    });
    setFormState(filtrerEtat);
  };
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value, 
      // [event.target.id] : event.target.id 
      // ,id : uuidv4()
    });
    console.log(formState);
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
            {tasks.map((item) => (
              <div key={item.id} id={item.id} className="task-container">
                <p>{item}</p>
                <button onClick={() => handleDelete}>delete</button>
              </div>
            ))}
          </div>
        </div>
        {/* <ToDoList /> */}
        <Beta/>
      </section>
      {/* comment récupérer l'identifiant de l'élement mappé pour le render ou non */}
    </>
  );
}
export default App;