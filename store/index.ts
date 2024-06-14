import { configureStore } from "@reduxjs/toolkit";

// local imports
import bottomSheetReducer from "./BottomSheet";
import userReducer from "./user";
import postReducer from "./posts";

export const store = configureStore({
  reducer: {
    bottomSheet: bottomSheetReducer,
    user: userReducer,
    posts: postReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
