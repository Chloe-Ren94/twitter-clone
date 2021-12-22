import {API_URL} from "../consts";
import axios from "axios";

export const fetchUser = (dispatch) => {
    fetch(`${API_URL}/user`, {
        method: 'POST',
        credentials: 'include'
    })
        .then(res => res.json())
        .then(user =>
            dispatch({
                type: 'fetch-user',
                user
            })
        );
}

export const updateUser = (dispatch, updatedUser) => {
    fetch(`${API_URL}/users`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
            'content-type': 'application/json'
        }
    }).then(res => dispatch({
        type: 'update-user',
        user: updatedUser
    }))
}

export const updateProfile = (dispatch, data) => {
    axios.put(`${API_URL}/users/profile`, data)
        .then(res => dispatch({
            type: 'update-user',
            user: res.data
        }))
        .catch(err => console.log(err));
}

export const updateHeader = (dispatch, data) => {
    axios.put(`${API_URL}/users/header`, data)
        .then(res => dispatch({
            type: 'update-user',
            user: res.data
        }))
        .catch(err => console.log(err));
}