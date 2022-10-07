import {
    REQ_SUCCESS,
    REQ_FAILURE,
    GET_ALL_EVENTS,
    DISAPPROVE_TICKET,
    REQ,
    APPROVE_TICKET
} from './actionType'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const req = () => ({
    type: REQ,
});

export const reqSuccess = (data) => ({
    type: REQ_SUCCESS,
    data
});
export const getEvents = (data) => ({
    type: GET_ALL_EVENTS,
    data
});
export const ticketApprove = (data) => ({
    type: APPROVE_TICKET,
    data
});
export const ticketDisapprove = (data) => ({
    type: DISAPPROVE_TICKET,
    data
});
export const reqFailure = (error) => ({
    type: REQ_FAILURE,
    error: error,
});

export const getAllEvents = (accessToken) => {
    return async (dispatch) => {
        dispatch(req());
        try {
            const token = JSON.parse(await AsyncStorage.getItem('eventAuthToken'))
            // console.log("token at event action", token)
            const response = await axios.get(
                `https://admin.nowbooking.com.au/api/organiser-employee/events`,
                {
                    headers: { authorization: token.accessToken }
                },
            )
            if (response.status) {
                console.log("first event action", response.data)
                dispatch(getEvents(response.data))
            } else {
                dispatch(reqFailure())
                console.log("error caught")
            }
        } catch (error) {
            dispatch(reqFailure(error.message))
        }
    }
}

export const approveTicket = (id, event, Alert) => {
    return async (dispatch) => {
        dispatch(req());
        try {
            const token = JSON.parse(await AsyncStorage.getItem('eventAuthToken'))
            console.log("token at event action", id)
            // console.log("ticket approved", response.data)
            const response = await axios.post(
                `https://admin.nowbooking.com.au/api/organiser-employee/approve-ticket`,
                {
                    ticket: id,
                    event
                },
                {
                    headers: { authorization: token.accessToken }
                },
            )
            if (response.status) {
                console.log("ticket approved", response.data)
                dispatch(ticketApprove(response.data))
                Alert.alert("Ticket Approved Successfully")
            } else {
                dispatch(reqFailure())
                console.log("error caught")
            }
        } catch (error) {
            dispatch(reqFailure(error.message))
        }
    }
}

export const disapproveTicket = (id, event, reason, Alert) => {
    return async (dispatch) => {
        dispatch(req());
        try {
            const token = JSON.parse(await AsyncStorage.getItem('eventAuthToken'))
            console.log("token at event action", token, id, event, reason)
            const response = await axios.post(
                `https://admin.nowbooking.com.au/api/organiser-employee/disapprove-ticket`,
                {
                    ticket: id,
                    event,
                    reason
                },
                {
                    headers: { authorization: token.accessToken }
                },
            )
            if (response.status) {
                console.log("disapprove",response.data)
                dispatch(ticketDisapprove(response.data))
                Alert.alert(" Ticket Rejected Successfully")
            } else {
                dispatch(reqFailure())
                console.log("error caught")
            }
        } catch (error) {
            dispatch(reqFailure(error.message))
        }
    }
}