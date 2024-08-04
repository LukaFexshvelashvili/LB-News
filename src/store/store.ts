import { configureStore } from "@reduxjs/toolkit";
import WebSlice from "./WebSlice";
import UserSlice from "./UserSlice";

export const store = configureStore({
  reducer: {
    web: WebSlice,
    user: UserSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type StoreState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
