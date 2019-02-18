import {FETCH_USER,RECEIVE_USER,RECEIVE_ERROR} from "./type";

export const initialState ={
    data:[],
    error:null,
    loading:false
};

export function resultReducer(state=initialState,action) {
    switch (action.type) {
        case FETCH_USER:
            console.log('reducer');
            return {
                ...state,
                loading: true,
                error: null
            };
        case RECEIVE_USER:
            return {
                ...state,
                loading: false,
                items: action.payload.results
            };
    
        case RECEIVE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
    
}
