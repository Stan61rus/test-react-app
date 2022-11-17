import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);
  const [input, setInput] = useState("test");

  function decrement() {
    setLikes(likes + 1);
  }

  function increment() {
    setLikes(likes + 1);
  }

  return (
    <div className="APP">
      <h1>{input}</h1>
      <h1>{likes}</h1>

      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
