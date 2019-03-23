import React from "react";

import Example1 from "./[01] hello world/App";
import Example2 from "./[02] multiple components/App";
import Example3 from "./[03] props/App";
import Example4 from "./[04] classes + props/App";
import Example5 from "./[05] initial state/App";
import Example6 from "./[06] setState and event handling/App";
import Example7 from "./[07] setState array of objects with callbacks/App";
import Example8 from "./[08] forms/App";
import Example9 from "./[09] api calls/App";
import Example10 from "./[10] props.children/App";

const Example = props => {
  const examples = [
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7,
    Example8,
    Example9,
    Example10
  ];

  const index = props.currentExampleId - 1;
  const SelectedExample = examples[index];
  return (
    <div>
      <SelectedExample />
    </div>
  );
};

export default Example;
