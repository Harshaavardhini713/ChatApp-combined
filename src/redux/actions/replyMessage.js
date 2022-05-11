import { ActionTypes } from "../constants/action-types";

export const addReplyMessages = (message) => {
    return {
        type: ActionTypes.REPLY_MESSAGE,
        payload: message,
    }
};

export const deleteReplyMessages = () => {
    return {
        type: ActionTypes.DELETE_REPLY_MESSAGE,
        payload: null,
    }
}