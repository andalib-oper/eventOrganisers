import {combineReducers} from 'redux';
import authReducer from './auth/reducer';
import eventReducer from './events/reducer';
import loginReducer from './Login/reducers'

const rootReducer = combineReducers({
  authState: authReducer,
  loginFormState: loginReducer,
  eventState: eventReducer
});

export default rootReducer;