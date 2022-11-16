import {REQ_SUCCESS, REQ, GET_PROFILE_DETAILS, EDIT_PROFILE_DETAILS, REQ_FAILURE} from './actionType';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const req = () => ({
  type: REQ,
});

export const reqSuccess = data => ({
  type: REQ_SUCCESS,
  data,
});
export const profileDetails = (data) => ({
    type: GET_PROFILE_DETAILS,
    data
})
export const editDetails = (data) => ({
    type: EDIT_PROFILE_DETAILS,
    data
})
export const reqFailure = error => ({
    type: REQ_FAILURE,
    error: error,
  });

  export const getAllProfileDetails = accessToken => {
    return async dispatch => {
      dispatch(req());
      try {
        const token = JSON.parse(await AsyncStorage.getItem('eventAuthToken'));
        // console.log("token at event action", token)
        const response = await axios.get(
          `https://admin.nowbooking.com.au/api/organiser-employee/events`,
          {
            headers: {authorization: token.accessToken},
          },
        );
        // if (response) {
          console.log('get profile details', response.data);
          dispatch(profileDetails(response.data));
      } catch (error) {
        dispatch(reqFailure(error.message));
      }
    };
  };

  export const editProfileDetails = accessToken => {
    return async dispatch => {
      dispatch(req());
      try {
        const token = JSON.parse(await AsyncStorage.getItem('eventAuthToken'));
        // console.log("token at event action", token)
        const response = await axios.get(
          `https://admin.nowbooking.com.au/api/organiser-employee/events`,
          {
            headers: {authorization: token.accessToken},
          },
        );
        // if (response) {
          console.log('edit details', response.data);
          dispatch(editDetails(response.data));
      } catch (error) {
        dispatch(reqFailure(error.message));
      }
    };
  };