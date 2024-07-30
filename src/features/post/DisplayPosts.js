import { useDispatch, useSelector } from "react-redux";
import {
  setDialogBox,
  selectAllPosts,
  editId,
  handleEdit,
  deletePost,
} from "./postsSlice";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState } from "react";
import DialogBox from "./DialogBox";
import Reaction from "./Reaction";
import { Card, CardContent, CardActions } from "@mui/material";
import EditPost from "./EditPost";

const DisplayPosts = () => {
  const posts = useSelector(selectAllPosts);
  const dispatch = useDispatch();
  const [selectedPost, setSelectedPost] = useState({});
  const selectedEditId = useSelector(editId);

  const viewDetails = (post) => {
    setSelectedPost(post);
    dispatch(setDialogBox(true));
  };

  const renderedPosts = posts.map((post) =>
    selectedEditId === post.id ? (
      <EditPost post={post} key={post.id} />
    ) : (
      <div key={post.id}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.content}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="outline"
              onClick={() => viewDetails(post)}
            >
              View Details
            </Button>
            <Button
              size="small"
              variant="outline"
              onClick={() => dispatch(handleEdit(post.id))}
            >
              Edit
            </Button>
            <Button
              size="small"
              variant="outline"
              onClick={() => dispatch(deletePost(post.id))}
            >
              Delete
            </Button>
            <DialogBox post={selectedPost} />
          </CardActions>
        </Card>
        <Reaction post={post} />
      </div>
    )
  );
  return (
    <section>
      <div>
        <h2>Posts</h2>
        {renderedPosts}
      </div>
    </section>
  );
};

export default DisplayPosts;
