import React, { useState } from "react";

import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
import Input from "./components/input";
import PostList from "./components/postList";

import "./styles/App.css";

function App() {
  const [posts] = useState([
    { id: 1, title: "Javascript", body: "Javascript" },
    { id: 2, title: "Javascript 2", body: "Javascript" },
    { id: 3, title: "Javascript 3", body: "Javascript" },
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={"Список постов"} />
      <Counter />
      <ClassCounter />
      <Input />
    </div>
  );
}

export default App;
