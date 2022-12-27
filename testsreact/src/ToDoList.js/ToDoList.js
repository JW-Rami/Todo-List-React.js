import React from "react";
import "./ToDOList.css"
import Form from "./Content/Form";

function ToDoList() {
  return (
    <>
      <section className="todo-container">
       <h1 className="todo-title">
        ToDoList 
       </h1>
       <Form/>
      </section>
    </>
  );
}

export default ToDoList;
