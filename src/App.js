import React from "react";

import Header from "./Header";
import Example from "./Example";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.numberOfExamples = 10;
    const initialExampleId = 1;
    this.state = {
      currentExampleId: initialExampleId
    };
  }

  hasNext = currentExampleId => currentExampleId < this.numberOfExamples;

  hasPrev = currentExampleId =>
    this.numberOfExamples > 0 && currentExampleId > 1;

  nextExample = () => {
    if (this.hasNext(this.state.currentExampleId)) {
      this.setState({
        currentExampleId: this.state.currentExampleId + 1
      });
    }
  };

  prevExample = () => {
    if (this.hasPrev(this.state.currentExampleId)) {
      this.setState({
        currentExampleId: this.state.currentExampleId - 1
      });
    }
  };

  render() {
    return (
      <div>
        <Header
          nextExample={this.nextExample}
          prevExample={this.prevExample}
          hasNext={this.hasNext(this.state.currentExampleId)}
          hasPrev={this.hasPrev(this.state.currentExampleId)}
        />
        <Example currentExampleId={this.state.currentExampleId} />
      </div>
    );
  }
}
