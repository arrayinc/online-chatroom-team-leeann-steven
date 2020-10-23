import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../reducers/index";
import messageReducer from "../features/message/messageSlice";
import messageListReducer from "../features/message/messageListSlice";
import userInfoReducer from "../features/userInfo/userInfoSlice";
import setChannelReducer from "../features/userInfo/userInfoSlice";
import setAvatarReducer from "../features/userInfo/userInfoSlice";
import setColorReducer from "../features/userInfo/userInfoSlice";

export default configureStore({
    reducer: {
      message: messageReducer,
    
      userInfo: userInfoReducer, 

      setChannel: setChannelReducer, 

      messageList: messageListReducer,

      avatar: setAvatarReducer,

      color: setColorReducer,


    },                       
  });