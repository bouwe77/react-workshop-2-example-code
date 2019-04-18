import React from "react";

const ToDoList = ({ todos }) => (
  <ul>
    {todos.map((todo, index) => (
      <li key={index}>{todo.description}</li>
    ))}
  </ul>
);

export default ToDoList;
