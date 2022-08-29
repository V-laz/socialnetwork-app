let state = {
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
    sidebar:{}
}
export default state;