import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";
import TreeStructure from "./TreeStructure";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();

  const url = "https://nitwit-api.azurewebsites.net/todos";

  // The useEffect hook runs after each render.
  // First, you pass in the function that must be called after a render.
  // Second, you pass in on which variables this useEffect depends on.
  // These variables, can be one or more of the following:
  // props, state, setters etc.
  useEffect(getToDos, [setTodos]);

  // getToDo fetches ToDos from the API and updates the state.
  function getToDos() {
    // Axios is one of the many libraries you can use to do HTTP calls with.
    axios
      .get(url)
      .then(res => {
        // The GET request was successful so update the state with the received ToDos.
        const todos = res.data;
        setIsLoaded(true);
        setTodos(todos);
      })
      .catch(error => {
        // In case of an error while calling the API,
        // the error is added to the state so it can be displayed.
        setIsLoaded(true);
        setError(error);
      });
  }

  // addToDo is a callback function called by the Form component.
  // It sends the ToDo to the API and updates the state.
  // It uses optimistic updates, meaning the state is updated
  // before the ToDo is send to the API. If the API call fails the
  // state is rollbacked to the original state.
  function addToDo(description) {
    // Temporarily store the current ToDos in case of a rollback.
    const previousTodos = todos;

    const newToDo = { description: description };

    // Set state by adding the new ToDo.
    setTodos([newToDo, ...todos]);

    // Post the new ToDo to the API.
    axios.post(url, newToDo).catch(error => {
      // The API call failed, so rollback to the previous state.
      setTodos(previousTodos);
      handleError(error);
    });
  }

  function handleError(error) {
    console.log(error, error.request, error.response, error.config);
    setError(error);
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <Header />
        <Form addToDo={addToDo} />
        <ToDoList todos={todos} />
        <TreeStructure />
      </div>
    );
  }
}

export default App;
