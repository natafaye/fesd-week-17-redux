import { createSlice } from "@reduxjs/toolkit";
import { USERS } from '../data';

const userSlice = createSlice({
    name: "users",
    initialState: {
        userList: USERS,
        loggedInUserId: 0
    },
    reducers: {
        setLoggedInUser: (state, action) => {
            state.loggedInUserId = action.payload;
        },
        registerUser: (state, action) => {
            state.userList.push({
                id: state.userList[state.userList.length - 1].id + 1, // id hack
                name: action.payload
            })
        }
    }
})

export const userReducer = userSlice.reducer;

export const { setLoggedInUser, registerUser } = userSlice.actions;