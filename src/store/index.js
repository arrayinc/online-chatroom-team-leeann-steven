import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from "../reducers/index";
import messageReducer from "../scenes/Chatroom/components/messages/messageSlice";
import messageListReducer from "../scenes/Chatroom/components/chatdisplay/messageListSlice";
import userInfoReducer from "../components/modal/userInfoSlice";
import setChannelReducer from "../components/modal/userInfoSlice";
import setColorReducer from "../components/modal/userInfoSlice";

export default configureStore({
    reducer: {
      message: messageReducer,
    
      userInfo: userInfoReducer, 

      setChannel: setChannelReducer, 

      messageList: messageListReducer,

      color: setColorReducer,
    },                       
  });