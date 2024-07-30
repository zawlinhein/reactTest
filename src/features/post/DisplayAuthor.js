import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const DisplayAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);
  const selectedAuthor = users.find((user) => user.id === userId);
  return <>by {selectedAuthor ? selectedAuthor.name : "unknown"}</>;
};

export default DisplayAuthor;
