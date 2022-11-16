import {
    REQ,
    REQ_FAILURE,
    REQ_SUCCESS,
    GET_ALL_REPORT,
  } from './actionTypes';
  
  const initialState = {
    loading: true,
    data: [],
  };
  
  const reportReducer = (state = initialState, action) => {
    switch (action.type) {
      case REQ: {
        return {
          ...state,
          loading: true,
          error: '',
        };
      }
      case REQ_SUCCESS: {
        return {
          ...state,
          data: [],
          loading: true,
          error: '',
        };
      }
      case GET_ALL_REPORT: {
        console.log("get all REPORTS", action.data)
        return {
          ...state,
          data: action.data,
          loading: false,
          error: '',
        };
      }
      case REQ_FAILURE: {
        // console.log("events reducer", action.data)
        return {
          ...state,
          // data: [],
          loading: false,
          error: action.error,
        };
      }
      default:
        return state;
    }
  };
  
  export default reportReducer;
  