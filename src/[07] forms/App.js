import React, { useState } from "react";

import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";
import TreeStructure from "./TreeStructure";

function App() {
  const [todos, setTodos] = useState([]);

  function addToDo(description) {
    setTodos([...todos, { description }]);
  }

  return (
    <div>
      <Header />
      <Form addToDo={addToDo} />
      <ToDoList todos={todos} />
      <TreeStructure />
    </div>
  );
}

export default App;
