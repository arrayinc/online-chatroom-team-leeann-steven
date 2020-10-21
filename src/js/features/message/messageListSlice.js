import { createSlice } from "@reduxjs/toolkit";

export const messageListSlice = createSlice({
    name: "??",
    initialState: {
      allMessages: [],
      allUsers: [],
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
  