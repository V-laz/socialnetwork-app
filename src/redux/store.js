import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "hi Gyver", likesCount: 5 },
                { id: 2, message: 'what are you doing?', likesCount: 8 },
                { id: 3, message: "Yo man!", likesCount: 12 }

            ]
        },
        dialogPage: {
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
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
  
    dispatch(action) {
        this._state.profilePage=profileReducer(this._state.profilePage,action);
        this._state.dialogPage=dialogReducer(this._state.dialogPage,action);
        this._state.sidebar=sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);  
    },

}

export default store;
