import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    value: "",
    id: "",
  },
  reducers: {
    messageReducer: (state, action) => {
      state.value = action.payload;
    },
    
  },
});

export const { messageReducer } = messageSlice.actions;
export const currentMessage = (state) => state.message.value;
export default messageSlice.reducer;
