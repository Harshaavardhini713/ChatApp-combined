import { ActionTypes } from "../constants/action-types";

let sid = 5;

export const setStarredMessages = (starredMessages) => {
    starredMessage = {
        sid: sid++,
        ...starredMessages,
    }
    return {
        type: ActionTypes.SET_STARRED_MESSAGES,
        payload: starredMessage
    }
};

export const removeStarredMessages = (starredMessages) => {
    return {
        type: ActionTypes.REMOVE_STARRED_MESSAGES,
        payload: starredMessages,
    }
}