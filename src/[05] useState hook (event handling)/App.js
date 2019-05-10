import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);

    // However, this is better: setCounter(prevCounter => prevCounter + 1);
    // This is because the value depends on the previousValue from state.
    // By passing in this updater function you ensure you are operating on the latest value of state.
    // Equivalent of the updater function above:
    // function increment(prevCounter) {
    //   return prevCounter + 1;
    // }
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1>Example 5: Update state using events</h1>

      <div className="stack-horizontally">
        <button onClick={decrementCounter}> - </button>
        <h3>{counter}</h3>
        <button onClick={incrementCounter}> + </button>
      </div>
    </div>
  );
}

export default App;
