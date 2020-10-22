import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: {
      name: "",
      avatar: "https://picsum.photos/50/50",
    },
    //value: "",
    channel: "",
  },
  reducers: {
    userInfoReducer: (state, action) => {
      state.user.name = action.payload;
    },
    setAvatarReducer: (state, action) => {
      state.user.avatar = action.payload;
    },
    setChannelReducer: (state, action) => {
      state.channel = action.payload;
    },
  },
});

export const { userInfoReducer, setChannelReducer } = userInfoSlice.actions;
export const currentUserInfo = (state) => state.userInfo.user.name;
export const currentAvatarInfo = (state) => state.userInfo.user.avatar;
export const currentChannelInfo = (state) => state.userInfo.channel;
export default userInfoSlice.reducer;
