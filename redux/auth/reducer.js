import { ActivityIndicatorComponent } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import {
  REQ,
  REQ_SUCCESS,
  SET_NEW_AUTH_TOKEN,
  REQ_FAILURE,
  LOGOUT,
  USERLOGGEDIN,
} from './actionTypes';


const initialState = {
    isLoggedIn: false,
    accessToken: "",
    loading: "",
    error: ""
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQ: {
        // console.log("auth started")
        return{
          ...state,
          loading: true
        }
      }
      case REQ_SUCCESS: {
        console.log(action)
        return {
          ...state,
          loading: false,
          accessToken: action.accessToken,
          isLoggedIn: true,
          error: '',
        };
      }
      case REQ_FAILURE: {
        if(action.error){
          showMessage({
            message: 'Error',
            description: action.error,
            type: 'danger',
          });
        }
      }
      case USERLOGGEDIN: {
       return{
        ...state,
        isLoggedIn: true,
        accessToken: action.payload,
        error: '',
        loading: false
       }
      }
      case LOGOUT: {
        const currUserId = state.userId;
        console.log("logout successfully at auth reducer");
        return {
          ...initialState
        };
      }
      default:
        return state;
    }
  };
  
  export default authReducer;