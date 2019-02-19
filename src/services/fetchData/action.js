import {FETCH_USER, RECEIVE_USER, RECEIVE_ERROR} from "./type";

export const fetchUser = () => ({
    type: FETCH_USER
});
export const receiveUser = results => ({
    type: RECEIVE_USER,
    payload: results
});
export const receiveError = error => ({
    type: RECEIVE_ERROR,
    payload: error
});
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchUser());
        fetch(`http://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json())
            .then(data => {
                dispatch(receiveUser(data));
            })
            .catch(error => dispatch(receiveError(error)));
    }
};
