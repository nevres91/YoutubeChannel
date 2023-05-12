import { combineReducers } from 'redux';
import { login, logout } from '../slices/auth';
import authReducer from '../slices/auth';
import videosReducer from '../slices/videos';


const rootReducer = combineReducers(
  {
    auth: authReducer,
    videos: videosReducer
  })

export default rootReducer;