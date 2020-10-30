import { configureStore } from '@reduxjs/toolkit';
import messageListReducer from "../scenes/Chatroom/components/messages/messageListSlice";
import userInfoReducer from "../components/modal/userInfoSlice";
import setColorReducer from "../components/modal/userInfoSlice";


export default configureStore({
    reducer: {
      userInfo: userInfoReducer, 

      messageList: messageListReducer,

      color: setColorReducer,
    },                       
  });