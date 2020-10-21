import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "??",
  initialState: {
    value: "",
    id: "1",
  },
  reducers: {
    messageReducer: (state, action) => {
      state.value = action.payload;
    },
    messageIdReducer: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { messageReducer, messageIdReducer } = messageSlice.actions;
export const currentMessage = (state) => state.message.value;
export const currentMessageId = (state) => state.message.id;
export default messageSlice.reducer;
