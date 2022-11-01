import React from "react";
import PostList from "./component/PostList";
import MyButton from "./component/UI/button/MyButton";
import "./styles/App.css";

function App() {
  const posts = [
    { id: 1, title: "JavaScript", body: "Description" },
    { id: 2, title: "JavaScript 2", body: "Description" },
    { id: 3, title: "JavaScript 3", body: "Description" },
  ];

  return (
    <div className="App">
      <form>
        <input type="text" placeholder="Введите заголовок" />
        <input type="text" placeholder="Введите описание" />
        <MyButton>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JavaScript" />
    </div>
  );
}

export default App;
