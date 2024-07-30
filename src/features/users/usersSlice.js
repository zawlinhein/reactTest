import { createSlice } from "@reduxjs/toolkit";

const allUsers = [
  { id: 1, name: "Dude Lebowski" },
  { id: 2, name: "Neil Young" },
  { id: 3, name: "Dave Gray" },
];

const initialState = {
  users: allUsers,
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users.users;
export default usersSlice.reducer;
