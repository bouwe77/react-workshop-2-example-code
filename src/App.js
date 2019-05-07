import React, { useState, useEffect } from "react";
import { getFromLocalStorage, setToLocalStorage } from "./localStorage";

import Header from "./Header";
import Example from "./Example";

function App() {
  const numberOfExamples = 16;
  const defaultExampleId = 1;
  const CURRENTEXAMPLEID = "currentExampleId";

  const [currentExampleId, setCurrentExampleId] = useState(defaultExampleId);

  useEffect(() => {
    const currentExampleId = getFromLocalStorage(
      CURRENTEXAMPLEID,
      defaultExampleId
    );
    saveCurrentExampleId(currentExampleId);
  });

  function hasNext(currentExampleId) {
    return currentExampleId < numberOfExamples;
  }

  function hasPrev(currentExampleId) {
    return numberOfExamples > 0 && currentExampleId > 1;
  }

  function nextExample() {
    if (hasNext(currentExampleId)) {
      const nextExampleId = currentExampleId + 1;
      saveCurrentExampleId(nextExampleId);
    }
  }

  function prevExample() {
    if (hasPrev(currentExampleId)) {
      const prevExampleId = currentExampleId - 1;
      saveCurrentExampleId(prevExampleId);
    }
  }

  function saveCurrentExampleId(exampleId) {
    setCurrentExampleId(exampleId);
    setToLocalStorage(CURRENTEXAMPLEID, exampleId);
  }

  return (
    <div>
      <Header
        nextExample={nextExample}
        prevExample={prevExample}
        hasNext={hasNext(currentExampleId)}
        hasPrev={hasPrev(currentExampleId)}
      />
      <Example currentExampleId={currentExampleId} />
    </div>
  );
}

export default App;
