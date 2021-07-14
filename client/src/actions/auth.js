import { AUTH } from '../constants/actionTypes';

import API from '../utils/API.js';


export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await API.signIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/')
    } catch (error) {
        console.log(error)
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await API.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/')
    } catch (error) {
        console.log(error)
    }
};
