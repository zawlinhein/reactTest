import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const AddPost = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [disable, setDisable] = useState(true);
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);
  const userMenu = users.map((user) => (
    <MenuItem key={user.id} value={user.id}>
      {user.name}
    </MenuItem>
  ));

  const savePost = () => {
    if (title && content) {
      dispatch(addPost({ title, content, userId }));
      setTitle("");
      setContent("");
      setUserId("");
      setDisable(true);
    }
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
    e.target.value && content ? setDisable(false) : setDisable(true);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
    e.target.value && title ? setDisable(false) : setDisable(true);
  };

  const onChangeUser = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: "auto", width: "20ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <h2>Add Post</h2>
        <TextField
          required
          id="Title"
          label="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <TextField
          required
          id="Content"
          label="Content"
          value={content}
          onChange={onChangeContent}
        />
        <FormControl sx={{ m: "auto", width: "15ch" }}>
          <InputLabel id="demo-simple-select-label">Author</InputLabel>
          <Select
            labelId="Author"
            id="Author"
            value={userId}
            onChange={onChangeUser}
          >
            {userMenu}
          </Select>
        </FormControl>
        <Button
          variant="outlined"
          disabled={disable}
          onClick={savePost}
          sx={{ my: "auto", width: "15ch" }}
        >
          Save Post
        </Button>
      </Box>
    </div>
  );
};

export default AddPost;
