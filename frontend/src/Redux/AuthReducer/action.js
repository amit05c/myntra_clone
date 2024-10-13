import * as types from "./action.type";
import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_BACKEND_API;

export const signup = (data) => (dispatch) => {
    // const apiBaseUrl = process.env.BACKEND_API;

    dispatch({ type: types.SIGNUP_REQUEST });
    return axios.post(`${apiBaseUrl}/user/signup`, data)
        .then((res) => dispatch({ type: types.SIGNUP_SUCCESS, payload: res.data.message }))
        .catch(err => dispatch({ type: types.SIGNUP_FAILURE }));
};

export const login = (data) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios.post(`${apiBaseUrl}/user/login`, data)
        .then((res) => dispatch({ type: types.LOGIN_SUCCESS, payload: res.data.token }))
        .catch(err => dispatch({ type: types.LOGIN_FAILURE, payload: console.log(err) }));
};

export const SingleProd = (id) => {
    return axios.get(`${apiBaseUrl}/singleProd/${id}`);
};
