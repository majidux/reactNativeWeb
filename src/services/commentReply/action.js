import {ADD_TEXT, DELETE_TEXT} from "./type";

const addTextFunc = text => {
    return {
        type: ADD_TEXT,
        text
    }
};

const deleteTextFunc = index => {
    return {
        type: DELETE_TEXT,
        index
    }
};

export const deleteText = index => {
    return deleteTextFunc(index);
};

export const addText = text => {
    return addTextFunc(text);
};
