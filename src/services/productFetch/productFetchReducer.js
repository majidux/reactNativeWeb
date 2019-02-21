import {FETCH_PRODUCT_BEGIN, FAILED_FETCH_PRODUCT, SUCCESS_FETCH_PRODUCT} from "./productFetchType";

export const initialState = {
    productData: [],
    loading: false,
    error: null
};
export const fetchProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_BEGIN:{
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case SUCCESS_FETCH_PRODUCT:{
            return {
                ...state,
                loading: false,
                productData: action.payload,
            }
        }
        case FAILED_FETCH_PRODUCT:{
            return {
                ...state,
                loading: false,
                error: action.payload,
                productData: []
            }
        }
        default:
            return state;
    }
};
