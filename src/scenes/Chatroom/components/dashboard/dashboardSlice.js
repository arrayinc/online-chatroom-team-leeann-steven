import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
    name: "dashboard",
    initialState: {
        user: {
            name: "@leeannuvas",
            avatar: "https://picsum.photos/40/40"
        },
        channel: {
            name: "#public",
            type: "public",
        }
    },
    reducers: {
        setUsername: (state, action) => {
            state.user.name = action.payload;
        },
        setAvatar: (state, action) => {
            state.user.avatar = action.payload;
        }
    },
});

export const { setUsername, setAvatar } = dashboardSlice.actions;
export const currentDashboard = state => state.dashboard;
export default dashboardSlice.reducer;