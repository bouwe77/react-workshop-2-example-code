import React from "react";

const ToDoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li>{todo.description}</li>
    ))}
  </ul>
);

export default ToDoList;
