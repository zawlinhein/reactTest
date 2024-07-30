import { createSlice, nanoid } from "@reduxjs/toolkit";

const allPosts = [
  {
    id: "1",
    title: "Learning Redux Tool",
    content: "I've heard good thing",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Slices.....",
    content: "The more I say slice, the more",
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const initialState = {
  posts: allPosts,
  openDialog: false,
  editId: "",
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare({ title, content, userId }) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    editPost: {
      reducer(state, action) {
        const { postId, titleEdit, contentEdit } = action.payload;
        const findPost = state.posts.find((post) => post.id === postId);
        if (findPost) {
          findPost.title = titleEdit;
          findPost.content = contentEdit;
        }
      },
    },
    deletePost(state, action) {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    setDialogBox: {
      reducer(state, action) {
        state.openDialog = action.payload;
      },
    },
    handleEdit: {
      reducer(state, action) {
        state.editId = action.payload;
      },
    },
    reactionAdd(state, action) {
      const { postId, reaction } = action.payload;
      const findPost = state.posts.find((post) => post.id === postId);
      if (findPost) findPost.reactions[reaction]++;
    },
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const dialogFlag = (state) => state.posts.openDialog;
export const editId = (state) => state.posts.editId;
export const {
  addPost,
  setDialogBox,
  reactionAdd,
  handleEdit,
  editPost,
  deletePost,
} = postsSlice.actions;
export default postsSlice.reducer;
