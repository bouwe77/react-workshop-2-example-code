import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { description: "" };
  }

  onChangeDescription = event => {
    this.setState({ description: event.target.value });
  };

  submitForm = event => {
    // Prevent submit reloads the page.
    event.preventDefault();

    // Call the addToDo callback function.
    const description = this.state.description;
    this.props.addToDo(description);

    // Clear the input.
    this.setState({ description: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <input
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.onChangeDescription}
        />
        <br />
        <button type="submit">OK</button>
      </form>
    );
  }
}

export default Form;
