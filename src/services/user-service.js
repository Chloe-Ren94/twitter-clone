import {API_URL} from "../consts";

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