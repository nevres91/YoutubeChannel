import { combineReducers } from 'redux';
import { login, logout } from '../slices/auth';
import authReducer from '../slices/auth';
import videosReducer from '../slices/videos';
import selectedBike from '../slices/selectedBike';
import selectBikePhoto from '../slices/selectedBikePhoto';


const rootReducer = combineReducers(
  {
    auth: authReducer,
    videos: videosReducer,
    bike: selectedBike,
    bikePhoto: selectBikePhoto
  })

export default rootReducer;