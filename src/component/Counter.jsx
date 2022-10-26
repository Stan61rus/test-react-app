import React, { useState } from "react";

const Counter = function () {
  const [count, setCount] = useState(5);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Прибавить</button>
      <button onClick={decrement}>Отнять</button>
    </div>
  );
};

export default Counter;
