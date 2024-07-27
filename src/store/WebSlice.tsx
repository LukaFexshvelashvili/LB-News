import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const WebSlice = createSlice({
  name: "Web",
  initialState: {
    loader: true,
  },
  reducers: {
    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
  },
});

export const { setLoader } = WebSlice.actions;
export default WebSlice.reducer;
