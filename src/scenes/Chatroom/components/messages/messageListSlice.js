import { createSlice } from "@reduxjs/toolkit";

const messageListSlice = createSlice({
  name: "messagelist",
  initialState: {
    allMessages: [],
    content: "",
  },

  reducers: {
    messageListReducer: (state, action) => {
      const { username, message, avatar, color } = action.payload;
      state.allMessages.push({ username, message, avatar, color });
    },
  },
});

export const { messageListReducer } = messageListSlice.actions;
export const messageList = (state) => state.messageList.allMessages;
export default messageListSlice.reducer;
