import {FETCH_USER, RECEIVE_USER, RECEIVE_ERROR} from "./type";

export const initialState = {
    data: [],
    error: null,
    loading: false
};

export function resultReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case RECEIVE_USER:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case RECEIVE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data:[]
            };
        default:
            return state;
    }
    
}
