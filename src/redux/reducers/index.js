import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {userReducer} from './userReducer';
import {starredMessageReducer} from './starredMessagesReducer';
import {replyReducer} from './replyReducer';

export const rootReducer = combineReducers({
  chatuser: userReducer,
  starredMessageReducer,
  replyReducer,
});
