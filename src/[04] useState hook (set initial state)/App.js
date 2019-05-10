import React, { useState } from "react";

function App() {
  // Declare a new state variable with default value 0.
  // useState returns an array containing the "counter" value from state
  // and the "setCounter" function you can use to update the state.
  const initialCounterValue = 0;
  var counterState = useState(initialCounterValue);
  const counter = counterState[0];
  const setCounter = counterState[1];

  //  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Example 4: initial state</h1>
      <h3>{counter}</h3>
    </div>
  );
}

export default App;
