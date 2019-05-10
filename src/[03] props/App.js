import React from "react";

import Welcome from "./Welcome";

function App() {
  const name = "New Nexus";

  return (
    <div>
      <Welcome name={name} />
    </div>
  );
}

export default App;
