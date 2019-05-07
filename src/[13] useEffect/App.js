import React, { useEffect } from "react";

// To control when an effect runs, provide a second argument – an array of values.
// Think of them as the dependencies for that effect.
// If one of the dependencies has changed since the last time,
// the effect will run again. It will also still run after the initial render.

function App() {
  // This effect function is called after each render, because no second argument is supplied.
  useEffect(afterEachRender);

  // This effect function is called when the component is mounted. We do this by passing an empty array.
  useEffect(whenMounting, []);

  // This effect function is called when the component is mounting and unmounting. We do this by passing an empty array.
  // An example where you would use this is starting and cleaning up a timer.
  useEffect(whenMountingAndUnmounting, []);

  function afterEachRender() {
    console.log("after each render...");
  }

  function whenMounting() {
    console.log("mounting...");
  }

  function whenMountingAndUnmounting() {
    console.log("mounting...");
    return () => {
      console.log("unmouting...");
    };
  }

  return <>useEffect</>;
}

export default App;
