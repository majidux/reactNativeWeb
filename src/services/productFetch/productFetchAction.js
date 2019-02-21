import {SUCCESS_FETCH_PRODUCT, FAILED_FETCH_PRODUCT, FETCH_PRODUCT_BEGIN} from "./productFetchType";

export const fetchProductBegin = () => ({
    type: FETCH_PRODUCT_BEGIN
    
});
export const successFetchProduct = items => ({
    type: SUCCESS_FETCH_PRODUCT,
    payload: items
});
export const failedFetchProduct = error => ({
    type: FAILED_FETCH_PRODUCT,
    payload: error
});
export const fetchDataProduct = () => {
    return (dispatch) => {
        dispatch(fetchProductBegin());
        fetch(`https://www.googleapis.com/books/v1/volumes?q=book`)
            .then(response => response.json())
            .then(data => {
                dispatch(successFetchProduct(data.items));
            })
            .catch(error => dispatch(failedFetchProduct(error)));
        
    }
};
