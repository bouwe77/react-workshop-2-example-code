import React from "react";
import { getFromLocalStorage, setToLocalStorage } from "./localStorage";

import Header from "./Header";
import Example from "./Example";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.numberOfExamples = 10;
    this.defaultExampleId = 1;
    this.CURRENTEXAMPLEID = "currentExampleId";

    this.state = {
      currentExampleId: this.defaultExampleId
    };
  }

  componentDidMount() {
    const currentExampleId = getFromLocalStorage(
      this.CURRENTEXAMPLEID,
      this.defaultExampleId
    );
    this.saveCurrentExampleId(currentExampleId);
  }

  hasNext = currentExampleId => currentExampleId < this.numberOfExamples;

  hasPrev = currentExampleId =>
    this.numberOfExamples > 0 && currentExampleId > 1;

  nextExample = () => {
    if (this.hasNext(this.state.currentExampleId)) {
      const nextExampleId = this.state.currentExampleId + 1;
      this.saveCurrentExampleId(nextExampleId);
    }
  };

  prevExample = () => {
    if (this.hasPrev(this.state.currentExampleId)) {
      const prevExampleId = this.state.currentExampleId - 1;
      this.saveCurrentExampleId(prevExampleId);
    }
  };

  saveCurrentExampleId = exampleId => {
    this.setState({
      currentExampleId: exampleId
    });
    setToLocalStorage(this.CURRENTEXAMPLEID, exampleId);
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
