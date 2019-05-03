import React from "react";

import Example1 from "./[01] hello world/App";
import Example2 from "./[02] multiple components/App";
import Example3 from "./[03] props/App";
import Example4 from "./[04] useState hook (set initial state)/App";
import Example5 from "./[05] useState hook (event handling)/App";
import Example6 from "./[06] useState hook (array of objects with callbacks)/App";
import Example7a from "./[07a] forms - uncontrolled inputs/App";
import Example7b from "./[07b] forms - controlled inputs/App";
import Example8 from "./[08] api calls/App";
import Example9 from "./[09] props.children/App";
import Example10 from "./[10] jsx avoid surrounding parent element/App";

const Example = props => {
  const examples = [
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
    Example6,
    Example7a,
    Example7b,
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
