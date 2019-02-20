import {ADD_TEXT, DELETE_TEXT} from "./type";

export const initialState = {
    textReply: [
        {
            user: 'Olive Houston',
            id: 0,
            position: 'CEO & Co-founder',
            profilePicture: require('../../Assets/images/profile.jpg'),
            comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            commentReply: []
        },
        {
            user: 'Jack Henderson',
            id: 1,
            position: 'New customer',
            profilePicture: require('../../Assets/images/profile2.jpg'),
            comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.',
            commentReply: []
            
        },
        {
            user: 'Emma Thomas',
            id: 2,
            position: 'Web Developer',
            profilePicture: require('../../Assets/images/profile3.jpg'),
            comment: 'Ut wisi enim ad minim veniam, sed diam nonummy nibh euismod tincidunt ut.',
            commentReply: []
            
        }
    ]
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                textReply: [...state.textReply.slice(0, action.id),
                    {
                        ...state.textReply[action.id],
                        commentReply: [...state.textReply[action.id].commentReply, action.text]
                    },
                    ...state.textReply.slice(action.id + 1)
                ]
                
            };
        
        
        case DELETE_TEXT:
            return {
                ...state,
                textReply: [
                    ...state.textReply.slice(0, action.id),
                    
                    ...state.textReply.slice(action.id + 1),
                ],
            };
        default :
            return state;
    }
};
