import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// local imports
import { Post } from "../components/types";
import { POSTS } from "../DATA";

interface PostStore {
  posts: Array<Post>;
}

const initialState: PostStore = {
  posts: POSTS,
};

export const posts = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, remove } = posts.actions;

export default posts.reducer;
