import { ActionTypes } from "../constants/action-types";

const initialState = {
    chats: [{
            "id": 1,
            "msg": "hi",
            "type": "recevier",
            "name": "John Doe",
            "time": "12:00",
            "conType": "individual"
        },
        {
            "id": 2,
            "msg": "hi",
            "type": "sender",
            "name": "Sam Doe",
            "time": "12:00",
            "conType": "individual"
        },
        {
            "id": 3,
            "msg": "how are you",
            "type": "recevier",
            "name": "John Doe",
            "time": "12:01",
            "conType": "individual"
        },
        {
            "id": 4,
            "msg": "i am fine",
            "type": "sender",
            "name": "Sam Doe",
            "time": "12:01",
            "conType": "individual"
        },
        {
            "id": 5,
            "msg": "how are you",
            "type": "recevier",
            "name": "John Doe",
            "time": "12:02",
            "conType": "individual"
        },
        {
            "id": 6,
            "msg": "i am fine",
            "type": "sender",
            "name": "Sam Doe",
            "time": "12:02",
            "conType": "individual"
        },
        {
            "id": 7,
            "msg": "how are you",
            "type": "recevier",
            "name": "John Doe",
            "time": "12:03",
            "conType": "individual"
        },
        {
            "id": 8,
            "msg": "i am fine",
            "type": "sender",
            "name": "Sam Doe",
            "time": "12:03",
            "conType": "individual"
        },
        {
            "id": 9,
            "msg": "how are you",
            "type": "recevier",
            "name": "John Doe",
            "time": "12:04",
            "conType": "individual"
        },
        {
            "id": 10,
            "msg": "i am fine",
            "type": "sender",
            "name": "Sam Doe",
            "time": "12:04",
            "conType": "individual"
        },
        {
            "id": 11,
            "msg": "how are you",
            "type": "recevier",
            "name": "John Doe",
            "time": "12:05",
            "conType": "individual"
        },
        {
            "id": 12,
            "msg": "i am fine",
            "type": "sender",
            "name": "Sam Doe",
            "time": "12:05",
            "conType": "individual"
        },
        {
            "id": 13,
            "msg": "great",
            "type": "recevier",
            "name": "John Doe",
            "time": "12:05",
            "conType": "individual"
        },
        {
            "id": 14,
            "msg": "Good to see you",
            "type": "sender",
            "name": "Sam Doe",
            "time": "12:05",
            "conType": "individual"
        },
    ]
};

export const chatReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.ADD_MESSAGE:
            return {
                ...state,
                chats: [...state.chats, payload]
            };
        case ActionTypes.DELETE_MESSAGE:
            return {
                ...state,
                chats: state.chats.filter(data => data.id !== payload.id)
            };
        case ActionTypes.DELETE_CONVERSATION:
            return {
                ...state,
                chats: [],
            };
        default:
            return state;
    }
}