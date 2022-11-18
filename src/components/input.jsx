import React, { useState } from "react";

function Input() {
  const [input, setInput] = useState("test");

  return (
    <div className="input">
      <h1>{input}</h1>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
}

export default Input;
