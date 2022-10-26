import PostItem from "./component/postItem";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <PostItem post={{ id: 1, title: "JavaScript", body: "Description" }} />
      <PostItem post={{ id: 2, title: "Pyton", body: "Description2" }} />
      <PostItem post={{ id: 3, title: "Java", body: "Description3" }} />
    </div>
  );
}

export default App;
