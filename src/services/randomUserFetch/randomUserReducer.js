import {SUCCESSFUL_FETCH_USER, FETCH_USER, FAILED_FETCH_USER} from "./randomUserType";

export const initialState = {
    randomUserData: [],
    error: null,
    loading: false
};

export const randomUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case SUCCESSFUL_FETCH_USER: {
            return {
                ...state,
                randomUserData: action.payload,
                loading: false
            }
        }
        case FAILED_FETCH_USER: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                randomUserData: []
            }
        }
        default:
            return state
    }
};
