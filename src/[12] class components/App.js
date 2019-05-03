import React from "react";

export default class MyClassComponent extends React.Component {
  // From the React.js docs:
  // We strongly recommend against creating your own base component classes.
  // In React components, code reuse is primarily achieved through composition rather than inheritance.

  // A class component needs a constructor when you want to receive props within the component.
  constructor(props) {
    // Call the React base class to make this.props available.
    super(props);

    // Optionally initialize state by directly setting a new object.
    // Outside the constructor, use "setState" only.
    this.state = {
      counter: 42
    };
  }

  // Note: also check the lifecycle hooks you can use in class components!

  // A class component needs at least a render method.
  // The render method will return JSX.
  render() {
    return (
      <div>
        This is a CLASS component.
        <br />
        {this.props.name}
        <br />
        Counter from state: {this.state.counter}
      </div>
    );
  }
}
