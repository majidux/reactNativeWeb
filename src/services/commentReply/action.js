import {ADD_TEXT, DELETE_TEXT} from "./type";

const addTextFunc =(text,id)=> {
    return {
        type: ADD_TEXT,
        text,
        id
    }
};

const deleteTextFunc = id => {
    return {
        type: DELETE_TEXT,
        id
    }
};

export const deleteText = index => {
    return deleteTextFunc(index);
};

export const addText = (text , index) => {
    return addTextFunc(text,index);
};
