
const userSlice = createSlice({
    name: "users",
    initialState: {
        userList: USERS,
        loggedInUserId: 0
    },
    reducers: {
        setLoggedInUser: (action, state) => {
            state.loggedInUserId = action.payload;
        },
        registerUser: (action, state) => {
            state.userList.push({
                id: state.userList[state.userList.length - 1].id + 1, // id hack
                name: action.payload // action.payload is basically = the data that was given
            })
        }
    }
})

// some exports down here