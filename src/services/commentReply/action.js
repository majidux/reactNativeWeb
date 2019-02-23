import {ADD_TEXT, DELETE_TEXT} from "./type";

const addTextFunc =(text,id)=> {
    return {
        type: ADD_TEXT,
        text,
        id
    }
};

const deleteTextFunc =(flatlistIndex,mapCommentIndex) => {
    return {
        type: DELETE_TEXT,
        id : flatlistIndex,
        index: mapCommentIndex
    }
};

export const deleteText = (flatlistIndex , mapCommentIndex) => {
    return deleteTextFunc(flatlistIndex,mapCommentIndex);
};

export const addText = (text , index) => {
    return addTextFunc(text,index);
};
