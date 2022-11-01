const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState ={
    
        dialogs: [
            { id: 1, name: "Gyver" },
            { id: 2, name: "lara" },
            { id: 3, name: "Alex" }
        ],
        messages: [
            { id: 1, message: "hi" },
            { id: 2, message: 'hello' },
            { id: 3, message: "Yo" }
        ],
        newMessageBody: ""
    }

const dialogReducer = (state=initialState , action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({ id: 4, message: body });
            return state;
            
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })
export default dialogReducer;