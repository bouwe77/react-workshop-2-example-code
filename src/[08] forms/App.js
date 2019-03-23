import React from "react";

import Header from "./Header";
import Form from "./Form";
import ToDoList from "./ToDoList";
import TreeStructure from "./TreeStructure";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  addToDo = description => {
    this.setState({
      todos: [...this.state.todos, { description }]
    });
  };

  render() {
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

export default App;
