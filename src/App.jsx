import Counter from "./components/counter";
import ClassCounter from "./components/classCounter";
import Input from "./components/input";
import PostItem from "./components/postItem";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PostItem />
      <Counter />
      <ClassCounter />
      <Input />
    </div>
  );
}

export default App;
