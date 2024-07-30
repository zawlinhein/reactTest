import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdd } from "./postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😲",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const Reaction = ({ post }) => {
  const dispatch = useDispatch();
  const reactionList = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        onClick={() =>
          dispatch(reactionAdd({ postId: post.id, reaction: name }))
        }
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <>{reactionList}</>;
};

export default Reaction;
