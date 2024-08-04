import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TuserState {
  favorites: number[];
}

const initialState: TuserState = {
  favorites: [],
};
const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<number[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const { setFavorites } = UserSlice.actions;
export default UserSlice.reducer;
