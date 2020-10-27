import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from "../reducers/index";
import messageReducer from "../scenes/Chatroom/components/messages/messageSlice";
import messageListReducer from "../scenes/Chatroom/components/messages/messageListSlice";
import userInfoReducer from "../components/modal/userInfoSlice";
import setChannelReducer from "../components/modal/userInfoSlice";
import setColorReducer from "../components/modal/userInfoSlice";
import channelListReducer from "../scenes/Chatroom/components/channels/channelListSlice";
import  allUsersReducer  from '../scenes/Chatroom/components/users/userListSlice';

export default configureStore({
    reducer: {
      userInfo: userInfoReducer, 

      setChannel: setChannelReducer, 

      messageList: messageListReducer,

      color: setColorReducer,

      channelList: channelListReducer,

      allUsers: allUsersReducer,
    },                       
  });