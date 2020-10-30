import { createSlice } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
  name: "user",
  initialState: {
    allUsers: [],
    content: "",
  },

  reducers: {
    allUsersReducer: (state, action) => {
      state.content = action.payload;
      state.allUsers = state.allUsers.concat(action.payload);
    },
  },
});

export const { allUsersReducer } = allUsersSlice.actions;
export const allUsersList = (state) => state.allUsers.allUsers;
export default allUsersSlice.reducer;
