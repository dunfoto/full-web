import Axios from "axios";

import axios from "axios"
const SIGN_IN = 'SIGN_IN';

const initState = {
    token: undefined,
    currentTitle: undefined
}

export default function AuthReducer(state = initState, action) {
    switch (action.type) {
        case SIGN_IN:
            return { ...state, currentUser: action.currentUser, token: action.token }
        default:
            return state;
    }
}

export function postSignIn(data) {
    return async dispatch => {
        try {
            const res = await axios.post(`/api/auth/login`, data)
            dispatch({
                type: SIGN_IN,
                token: res.data.token,
                currentUser: res.data.currentUser
            })
        } catch (err) {
            return Promise.reject(err)
        }
    }
}