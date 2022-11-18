import React, { useState } from "react";
import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
import Input from "./components/input";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javascript - язык программирования</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>

      <br />
      <Counter />
      <ClassCounter />
      <Input />
    </div>
  );
}

export default App;
