import {
  REQ,
  REQ_FAILURE,
  REQ_SUCCESS,
  EDIT_PROFILE_DETAILS,
  GET_PROFILE_DETAILS,
} from './actionTypes';

const initialState = {
  loading: true,
  data: [],
};

const profileReducer = (state = initialState, action) => {
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
    case GET_PROFILE_DETAILS: {
      console.log("get all profile details", action.data)
      return {
        ...state,
        data: action.data,
        loading: false,
        error: '',
      };
    }
    case EDIT_PROFILE_DETAILS: {
      console.log('edit details reducer', action.data);
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

export default profileReducer;
