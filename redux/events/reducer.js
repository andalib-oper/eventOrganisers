import {
    REQ_SUCCESS,
    REQ_FAILURE,
    GET_ALL_EVENTS,
    GET_ALL_PAST_EVENTS,
    DISAPPROVE_TICKET,
    REQ,
    APPROVE_TICKET
} from './actionType'

const initialState = {
    loading: true,
    pastEvents: [],
    data: [],
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQ: {
            return {
                ...state,
                loading: true,
                error: ''
            }
        }
        case REQ_SUCCESS: {
            return {
                ...state,
                data: [],
                loading: true,
                error: ''
            }
        }
        case GET_ALL_EVENTS: {
            // console.log("events reducer get all ticket", action.data)
            return {
                ...state,
                data: action.data,
                loading: false,
                error: ''
            }
        }
        case GET_ALL_PAST_EVENTS: {
            console.log("events reducer get past ticket", action.data)
            return {
                ...state,
                pastEvents: action.data,
                loading: false,
                error: ''
            }
        }
        case APPROVE_TICKET: {
            console.log("events reducer approve", action.data)
            return {
                ...state,
                // data: action.data,
                loading: false,
                error: ''
            }
        }
        case DISAPPROVE_TICKET: {
            console.log("events reducer disapprove", action.data)
            return {
                ...state,
                // data: action.data,
                loading: false,
                error: ''
            }
        }
        case REQ_FAILURE: {
            // console.log("events reducer", action.data)
            return {
                ...state,
                // data: [],
                loading: false,
                error: action.error
            }
        }
        default:
            return state;
    }
};

export default eventReducer;