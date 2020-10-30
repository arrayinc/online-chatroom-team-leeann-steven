import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: {
      name: "",
      avatar: "",
    },
  },
  reducers: {
    userInfoReducer: (state, action) => {
      state.user.name = action.payload;
    },
    setAvatarReducer: (state, action) => {
      state.user.avatar = action.payload;
    },
    setColorReducer: (state, action) => {
      state.user.color = action.payload;
    },
  },
});

export const {
  userInfoReducer,
  setAvatarReducer,
  setColorReducer,
} = userInfoSlice.actions;
export const currentUserInfo = (state) => state.userInfo.user.name;
export const currentAvatarInfo = (state) => state.userInfo.user.avatar;
export const currentColorInfo = (state) => state.userInfo.user.color;
export default userInfoSlice.reducer;
