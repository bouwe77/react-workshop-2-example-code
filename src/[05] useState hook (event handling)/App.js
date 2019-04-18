import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
    // However, this is better: setCounter(counter => counter + 1);
    // Which is equivalent to:
    BLADIEBLA ja hiero
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
