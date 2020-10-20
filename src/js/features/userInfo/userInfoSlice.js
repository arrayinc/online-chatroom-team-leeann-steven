import { createSlice } from "@reduxjs/toolkit";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    value: "pete",
    channel: "room",
  },
  reducers: {
    userInfoReducer: (state, action) => {
      state.value = action.payload;
    },
    setChannelReducer: (state, action) => {
      state.channel = action.payload;
    },
  },
});

export const { userInfoReducer , setChannelReducer } = userInfoSlice.actions;
export const currentUserInfo = state => state.userInfo.value;
export const currentChannelInfo = state => state.userInfo.channel;
export default userInfoSlice.reducer;


