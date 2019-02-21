import {FETCH_USER, SUCCESSFUL_FETCH_USER, FAILED_FETCH_USER} from "./randomUserType";

export const randomUserFetch = () => ({
    type: FETCH_USER
});
export const successUserFetch = results => ({
    type: SUCCESSFUL_FETCH_USER,
    payload: results
});
export const failedUserFetch = error => ({
    type: FAILED_FETCH_USER,
    payload: error
});
export const randomUserFetchFunction = () => {
    return (dispatch) => {
        dispatch(randomUserFetch());
        fetch(`https://randomuser.me/api/?results=5`)
            .then(response => response.json())
            .then(data => {
                dispatch(successUserFetch(data.results));
            })
            .catch(error => dispatch(failedUserFetch(error)))
    }
};
