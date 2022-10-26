import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(5);
  const [text, setText] = useState("Hello world!");

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{text}</h1>

      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>Прибавить</button>
      <button onClick={() => setCount(count - 1)}>Отнять</button>
    </div>
  );
}

export default App;
