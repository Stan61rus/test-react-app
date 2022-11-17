import React, { useState } from "react";

function App() {
  const [likes, setLikes] = useState(0);

  function decrement(params) {
    setLikes(likes + 1);
  }

  function increment(params) {
    setLikes(likes + 1);
  }

  return (
    <div className="APP">
      <h1>{likes}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
