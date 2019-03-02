/**
 * Created by Rasmus on 2018-07-03.
 */
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducers';
import adminsReducer from './adminsReducers';

export default combineReducers({
    users: userReducer,
    auth: authReducer,
    admins: adminsReducer
});