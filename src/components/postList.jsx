import PostItem from "./postItem";

function PostList(props) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      {console.log(props)}
      {props.posts.map((e) => {
        return <PostItem post={e} key={e.id} />;
      })}
    </div>
  );
}

export default PostList;
