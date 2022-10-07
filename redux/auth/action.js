import {
  REQ,
  REQ_SUCCESS,
  SET_NEW_AUTH_TOKEN,
  REQ_FAILURE,
  LOGOUT,
  USERLOGGEDIN,
} from './actionTypes';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const req = () => ({
  type: REQ,
});

export const reqSuccess = (accessToken) => ({
  type: REQ_SUCCESS,
  accessToken
});
export const reqFailure = (error) => ({
  type: REQ_FAILURE,
  error: error,
});

export const setNewAuthToken = (newAuthToken, newAuthTokenExpiry) => ({
  type: SET_NEW_AUTH_TOKEN,
  newAuthToken,
  newAuthTokenExpiry,
});

export const logUserIn = (loginData) => {
  return async (dispatch) => {
    dispatch(req());
    console.log('login works');
    try {
      const response = await axios.post(`https://admin.nowbooking.com.au/api/organiser-employee/login`, {
        email: loginData.email,
        password: loginData.password,
      });
      console.log("response",response.data)
      if (response.headers.error) {
        dispatch(reqFailure('Invalid login credentials! Please try again.'));
        // console.log(response.headers.error);
      } else if (response) {
        // console.log('saving to async storage');
        console.log('COMPLETE RESPONSE DATA:', response.data)
        //? SAVING USER DATA TO ASYNC STORAGE ON SUCCESSFUL LOGIN.
        if (response.data) {
          const userData = JSON.stringify({
            accessToken: response.data,
          });
          await AsyncStorage.setItem('eventAuthToken', userData);
          // console.log('Saved data to async storage!');
          // console.log(response)
          dispatch(reqSuccess(response.data));
        } else {
          dispatch(
            reqFailure(
              "You Are Not Authorized"
            ),
          );
        }
      } else {
        dispatch(
          reqFailure(
            "Something's not right! Please try again after some time.",
          ),
        );
      }
    } catch (err) {
      console.log(err.message);
      if (err.message.includes('401')) {
        dispatch(reqFailure('Invalid credentials!'));
      } else {
        console.log("catch", err.mesage)
        dispatch(reqFailure(err.message));
      }
    }
  };
};

export const tokenRetriever = () => {
  console.log('login works567');
  return async (dispatch) => {
    console.log('login works123');
    dispatch(req());
    try {
      const token = JSON.parse( await AsyncStorage.getItem('eventAuthToken'));
      console.log("23",token)
      const url = `https://admin.nowbooking.com.au/api/organiser-employee/isUserLoggedIn`
      const res = await axios.post(
        url,
        {},
        {
          headers: {
            authorization: token.accessToken
          }
        }
      )
      console.log("first", res.data)
      dispatch({ type: USERLOGGEDIN, payload: token })
    } catch (error) {
      console.log("first", error.message)
      dispatch({type: LOGOUT})
    }
  }
};


export const logout = () => ({
  type: LOGOUT
});