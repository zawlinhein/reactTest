import "./App.css";
import DisplayPosts from "./features/post/DisplayPosts";
import AddPost from "./features/post/AddPost";

function App() {
  return (
    <div className="center">
      <AddPost />
      <DisplayPosts />
    </div>
  );
}

export default App;
