import React from "react";
import "./Beta.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Beta() {
  const [formState, setFormState] = useState({
    tache: "",
    // id: uuidv4(),
  });
  // ------------------------------------------------
  
  const [tasks, setTasks] = useState([]);

  // ------------------------------------------------

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
    // console.log(formState);
  };
  // ------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      task: formState.tache,
      id: formState.id,
    };
    setTasks([...tasks, formData.task]);
  };

  return (
    <>
      <section className="beta-container">
        <form className="form-beta">
          <label>Chose à faire</label>
          <input type="text" onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div className="todolist-beta-container"></div>
      </section>
    </>
  );
}

export default Beta;
