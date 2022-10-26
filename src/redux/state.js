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
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    } ,

}

export default store;
