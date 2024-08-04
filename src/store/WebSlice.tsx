import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const WebSlice = createSlice({
  name: "Web",
  initialState: {
    loader: { active: false, opacity: false },
  },
  reducers: {
    setWebLoader: (
      state,
      action: PayloadAction<{ active: boolean; opacity?: boolean }>
    ) => {
      state.loader = {
        active: action.payload.active,
        opacity: action.payload.active ? action.payload.active : false,
      };
    },
  },
});

export const { setWebLoader } = WebSlice.actions;
export default WebSlice.reducer;
