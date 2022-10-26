import React from "react";

function App() {
  return React.createElement(
    "button",
    { disabled: false, onClick: () => console.log("test") },
    "Test"
  );
}

export default App;
