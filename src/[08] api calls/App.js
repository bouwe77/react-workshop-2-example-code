import React from "react";
import axios from "axios";

import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";
import TreeStructure from "./TreeStructure";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.url = "https://nitwit-api.azurewebsites.net/todos";
    this.state = { isLoaded: false, todos: [] };
  }

  // componentDidMount is a lifecycle hook, just like render().
  // However, componentDidMount is called before render() and
  // therefore the suitable moment to fetch data from an API.
  componentDidMount = () => {
    this.getToDos();
  };

  // getToDo fetches ToDos from the API and updates the state.
  getToDos = () => {
    // Axios is one of the many libraries you can use to do HTTP calls with.
    axios
      .get(this.url)
      .then(res => {
        // The GET request was successful so update the state with the received ToDos.
        const todos = res.data;
        this.setState({ isLoaded: true, todos });
      })
      .catch(error => {
        // In case of an error while calling the API,
        // the error is added to the state so it can be displayed.
        this.setState({ isLoaded: true, error });
      });
  };

  // addToDo is a callback function called by the Form component.
  // It sends the ToDo to the API and updates the state.
  // It uses optimistic updates, meaning the state is updated
  // before the ToDo is send to the API. If the API calls the
  // state is rollbacked to the original state.
  addToDo = description => {
    // Temporarily store the current ToDos in case of a rollback.
    const previousTodos = this.state.todos;

    const newToDo = { description: description };

    // Set state by adding the new ToDo.
    this.setState(prevState => ({
      todos: [newToDo, ...prevState.todos]
    }));

    // Post the new ToDo to the API.
    axios.post(this.url, newToDo).catch(error => {
      // The API call failed, so rollback to the previous state.
      this.setState({ todos: previousTodos, error });
    });
  };

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>;
    } else if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Header />
          <Form addToDo={this.addToDo} />
          <ToDoList todos={this.state.todos} />
          <TreeStructure />
        </div>
      );
    }
  }
}

export default App;
