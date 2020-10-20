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
        },
        setChannel: (state, action) => {
            state.channel = {
                name: action.payload.name,
                type: action.payload.type
            }
        }
    },
});

export const { setUsername, setAvatar, setChannel } = dashboardSlice.actions;
export const currentDashboard = state => state.dashboard;
export default dashboardSlice.reducer;