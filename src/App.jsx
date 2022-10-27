import React from "react";
import PostList from "./component/PostList";
import "./styles/App.css";

function App() {
  const posts = [
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ];

  const posts2 = [
    { id: 1, title: "Pyton", body: "Description" },
    { id: 2, title: "Pyton 2", body: "Description" },
    { id: 3, title: "Pyton 3", body: "Description" },
  ];

  return (
    <div className="App">
      <PostList posts={posts} title="Посты про JavaScript" />
      <PostList posts={posts2} title="Посты про Pyton" />
    </div>
  );
}

export default App;
