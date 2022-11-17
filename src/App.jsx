import React, { useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";

function App() {
  const [input, setInput] = useState("test");

  return (
    <div className="APP">
      <Counter />
      <ClassCounter />

      <h1>{input}</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
}

export default App;
