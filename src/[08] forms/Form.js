import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };
  }

  onChangeDescription = event => {
    const textbox = event.target;
    this.setState({ description: textbox.value });
  };

  submitForm = event => {
    // Prevent submit reloads the page.
    event.preventDefault();

    // Call the addToDo callback function.
    const description = this.state.description;
    this.props.addToDo(description);

    // Clear the description so the textbox is cleared.
    this.setState({ description: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="description"
          // The value is "read" from state: one way binding
          value={this.state.description}
          // Events are used to update state
          onChange={this.onChangeDescription}
        />
        <br />
        <button type="submit">OK</button>
      </form>
    );
  }
}

export default Form;
