import { createSlice } from "@reduxjs/toolkit";

//const oldMessages = [];
//const initialState = { allMessages: [], allUsers: [] };

const messageListSlice = createSlice({
  name: "messagelist",
  initialState: {
    allMessages: [],
    content: "",
    // timestamp: new Date(),
    userId: "192928101",
    chatroomId: "8w8292910",
  },

  reducers: {
    messageListReducer: (state, action) => {
      state.content = action.payload;
      state.allMessages = state.allMessages.concat(action.payload);
    },
  },
});

export const { messageListReducer } = messageListSlice.actions;
export const messageList = (state) => state.messageList.allMessages;
export default messageListSlice.reducer;
