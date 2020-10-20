import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../reducers/index";
import messageReducer from "../features/message/messageSlice"
import userInfoReducer from "../features/userInfo/userInfoSlice"


export default configureStore({
    reducer: {
      message: messageReducer,

      userInfo: userInfoReducer,   
    },                       
  });