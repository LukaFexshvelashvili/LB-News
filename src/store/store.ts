import { configureStore } from "@reduxjs/toolkit";
import WebSlice from "./WebSlice";

export const store = configureStore({
  reducer: {
    web: WebSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
