import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Set initial state.
    this.state = {
      number: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Example 5: initial state</h1>
        <h3>{this.state.number}</h3>
      </div>
    );
  }
}

export default App;
