import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "??",
  initialState: {
    value: "",
  },
  reducers: {
    userInfoReducer: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userInfoReducer } = userInfoSlice.actions;
export const currentUserInfo = state => state.userInfo.value;

export default userInfoSlice.reducer;
