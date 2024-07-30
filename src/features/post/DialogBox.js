import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dialogFlag, setDialogBox } from "./postsSlice";
import DisplayAuthor from "./DisplayAuthor";

const DialogBox = ({ post }) => {
  const boxFlag = useSelector(dialogFlag);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(setDialogBox(false));

  return (
    <>
      <Dialog
        open={boxFlag}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{post.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {post.content}
            <br />
            <DisplayAuthor userId={post.userId} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogBox;
