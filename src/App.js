import React from "react";
import { reactLocalStorage } from "reactjs-localstorage";

import Header from "./Header";
import Example from "./Example";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.numberOfExamples = 10;
    this.CURRENTEXAMPLEID = "currentExampleId";

    let initialExampleId = reactLocalStorage.get(this.CURRENTEXAMPLEID);
    this.state = {
      currentExampleId: initialExampleId
    };
  }

  componentDidMount() {
    // if (reactLocalStorage.hasOwnProperty(this.CURRENTEXAMPLEID)) {
    //   this.saveCurrentExampleId(reactLocalStorage.get(this.CURRENTEXAMPLEID))
    // }
  }

  hasNext = currentExampleId => currentExampleId < this.numberOfExamples;

  hasPrev = currentExampleId =>
    this.numberOfExamples > 0 && currentExampleId > 1;

  nextExample = () => {
    if (this.hasNext(this.state.currentExampleId)) {
      this.saveCurrentExampleId(this.state.currentExampleId + 1);
    }
  };

  prevExample = () => {
    if (this.hasPrev(this.state.currentExampleId)) {
      this.save(this.state.currentExampleId - 1);
    }
  };

  saveCurrentExampleId = exampleId => {
    this.setState({
      currentExampleId: exampleId
    });
    reactLocalStorage.set(this.CURRENTEXAMPLEID, exampleId);
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
