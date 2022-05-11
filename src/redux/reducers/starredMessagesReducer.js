import { ActionTypes } from "../constants/action-types";

const initialState = {
    starredMessages: [{
            id: 1,
            sid: 1,
            name: 'John Doe',
            profile: require('../../assets/demo.png'),
            message: "Someting"
        },
        {
            id: 2,
            sid: 2,
            name: 'John wick',
            profile: require('../../assets/demo.png'),
            message: "Pencil"
        },
    ]
};

export const starredMessageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_STARRED_MESSAGES:
            if (state.starredMessages.find(data => data.id === payload.id)) {
                return state;
            }
            return {...state, starredMessages: [...state.starredMessages, payload] };

        case ActionTypes.REMOVE_STARRED_MESSAGES:
            // console.log("payload", payload);
            return {...state,
                starredMessages: removeStarredMessages(state.starredMessages, payload)
            };
        default:
            return state;
    }
}

const removeStarredMessages = (starredMessages, payload) => {
    const newStarredMessages = starredMessages.filter(data => data.id !== payload._id);
    return newStarredMessages;
}