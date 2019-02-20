import {combineReducers} from "redux";
import * as commentReducer from "./commentReply/reducer";
import * as fetcher from "./fetchData/resultReducer";
import * as randomUserFetcher from "./randomUserFetch/randomUserReducer";

const rootReducer = combineReducers({
    commentState  : commentReducer.reducer,
    fetchState : fetcher.resultReducer,
    randomUserFetch:randomUserFetcher.randomUserReducer
});
// const rootReducer = (state) => {
//     state = {
//         commentState :{
//            ...commentReducer.initialState
//        } ,
//         fetchState : {
//            ...fetcher.initialState
//         }
//     };
//     return combiner(state)
// };
export default rootReducer;
