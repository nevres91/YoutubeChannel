import { combineReducers } from 'redux';
import { login, logout } from '../slices/auth';
import authReducer from '../slices/auth';


const rootReducer = combineReducers(
  {
    auth: authReducer,
  })

export default rootReducer;