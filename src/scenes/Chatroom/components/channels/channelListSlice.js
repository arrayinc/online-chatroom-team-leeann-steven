import { createSlice } from "@reduxjs/toolkit";

const channelListSlice = createSlice({
  name: "channel",
  initialState: {
    allChannels: [],
    content: "",
  },

  reducers: {
    channelListReducer: (state, action) => {
      state.content = action.payload;
      state.allChannels = state.allChannels.concat(action.payload);
    },
  },
});

export const { channelListReducer } = channelListSlice.actions;
export const allChannelList = (state) => state.channelList.allChannels;
export default channelListSlice.reducer;