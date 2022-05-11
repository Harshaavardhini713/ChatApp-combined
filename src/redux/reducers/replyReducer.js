import { ActionTypes } from "../constants/action-types";

const initialState = {
    replyMessage: []
};

export const replyReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.REPLY_MESSAGE:
            return {
                state,
                replyMessage: payload
            };
        case ActionTypes.DELETE_REPLY_MESSAGE:
            return {
                state,
                replyMessage: []
            };
        default:
            return state;
    }
}