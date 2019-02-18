import {combineReducers} from "redux";
import reducer from "./commentReply/reducer";

const combiner = combineReducers({
    reducer,
    // fetchReducer
});
