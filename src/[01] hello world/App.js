import React from "react";
import ReactDOM from "react-dom";
import "../styles.css";

function Welcome() {
  return <div>Example 1: Hello World!</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Welcome />, rootElement);

// Note that this export is only here to make my Examples App work...
export default Welcome;
