import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import Reaction from "./Reaction";
import { useDispatch } from "react-redux";
import { editPost, handleEdit } from "./postsSlice";

const EditPost = ({ post }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onClickComfirm = () => {
    dispatch(
      editPost({ postId: post.id, titleEdit: title, contentEdit: content })
    );
    dispatch(handleEdit(""));
  };
  return (
    <div key={post.id}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <TextField value={title} onChange={onChangeTitle} />
          <TextField value={content} onChange={onChangeContent} />
        </CardContent>
        <CardActions>
          <Button size="small" variant="outline" onClick={onClickComfirm}>
            Comfirm
          </Button>
        </CardActions>
      </Card>
      <Reaction post={post} />
    </div>
  );
};

export default EditPost;
