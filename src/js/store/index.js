import { configureStore } from '@reduxjs/toolkit';
//import rootReducer from "../reducers/index";
import messageReducer from "../features/message/messageSlice"
import userInfoReducer from "../features/userInfo/userInfoSlice"
import { setUsername, setAvatar, setChannel } from '../../components/Dashboard/dashboardSlice';


export default configureStore({
    reducer: {
      message: messageReducer,
      userInfo: userInfoReducer,
      username: setUsername,
      avatar: setAvatar,
      channel: setChannel,
       
    },                       
  });