import {REQ_SUCCESS, REQ, GET_ALL_MESSAGES, REQ_FAILURE} from './actionType';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const req = () => ({
  type: REQ,
});

export const reqSuccess = data => ({
  type: REQ_SUCCESS,
  data,
});
export const allReport = (data) => ({
    type: GET_ALL_MESSAGES,
    data
})
export const reqFailure = error => ({
    type: REQ_FAILURE,
    error: error,
  });

  export const getAllReport = accessToken => {
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
          console.log('get all report', response.data);
          dispatch(allReport(response.data));
      } catch (error) {
        dispatch(reqFailure(error.message));
      }
    };
  };