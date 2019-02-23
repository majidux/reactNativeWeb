import {ADD_TEXT, DELETE_TEXT} from "./type";

const addTextFunc =(text,id)=> {
    return {
        type: ADD_TEXT,
        text,
        id
    }
};

const deleteTextFunc =(flatListIndex,mapCommentIndex) => {
    return {
        type: DELETE_TEXT,
        id : flatListIndex,
        index: mapCommentIndex
    }
};

export const deleteText = (flatListIndex , mapCommentIndex) => {
    return deleteTextFunc(flatListIndex,mapCommentIndex);
};

export const addText = (text , index) => {
    return addTextFunc(text,index);
};
