import React from "react";

// Named imports, i.e. multiple exports by name. the name has to be correct.
import { Component1a, Component1b } from "./Component1";
// Alternatively: import all named exports. When using the component you have to prefix it with "MyComponents":
//import * as MyComponents from "./Component1";

// Import a default export, where the name does not matter.
import NameDoesNotMatter from "./Component2";

export default function App() {
  return (
    <>
      <Component1a />
      <Component1b />
      <NameDoesNotMatter />
    </>
  );
}
