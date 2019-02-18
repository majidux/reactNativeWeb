import {ADD_TEXT,DELETE_TEXT} from "./type";

export const initialState ={
    textReply:[]
};

export const reducer = (state= initialState,action)=>{
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                textReply:[
                    ...state.textReply,
                    action.text
                ]
               
            };
    
            
        case DELETE_TEXT:
            return{
                ...state,
                textReply : [
                    ...state.textReply.slice(0 ,action.index),
                    ...state.textReply.slice(action.index + 1),
                ] ,
            };
        default :
            return state;
    }
};
