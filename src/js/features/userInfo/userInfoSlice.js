import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    user: {
      name: "",
      avatar: "",
      color: "",
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
    setColorReducer: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { userInfoReducer, setChannelReducer, setAvatarReducer, setColorReducer } = userInfoSlice.actions;
export const currentUserInfo = (state) => state.userInfo.user.name;
export const currentAvatarInfo = (state) => state.userInfo.user.avatar;
export const currentChannelInfo = (state) => state.userInfo.channel;
export const currentColorInfo = (state) => state.userInfo.user.color;
export default userInfoSlice.reducer;
