import { createSlice } from "@reduxjs/toolkit";
import { ORDERS } from "../data";

export const fetchOrders = createAsyncThunk(
    'fetch-orders',
    async () => { // this returns a promise that will first be pending, and then fulfilled or rejected
        const response = await fetch("http://localhost:3004/orders")
        if(!response.ok) {
            return Promise.reject(response.statusText)
        }
        const data = await response.json()
        return data // automatically be put in a fulfilled promise for us
    }
)

export const postOrder = createAsyncThunk(
    'post-order',
    async (newOrderData) => { // this returns a promise that will first be pending, and then fulfilled or rejected
        const response = await fetch("http://localhost:3004/orders", { 
            method: "POST", 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newOrderData) 
        })
        if(!response.ok)
            return Promise.reject(response.statusText)
        return await response.json() // automatically be put in a fulfilled promise for us
    }
)
  

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orderList: [],
        loading: false,
        posting: false,
        errorMessage: null
    },
    reducers: {
        deleteOrder: (state, action) => {
            state.orderList = state.orderList.filter(order => order.id !== action.payload)
        },
    },
    extraReducers: {
        [fetchOrders.pending]: (state) => {
            state.loading = true
        },
        [fetchOrders.fulfilled]: (state, action) => {
            state.loading = false
            state.errorMessage = null
            state.orderList = action.payload // assume the payload has all the data from the backend
        },
        [fetchOrders.rejected]: (state, action) => {
            state.loading = false
            state.errorMessage = action.error.message // use an error property on the action (or in the payload)
            state.orderList = []
        },
        [postOrder.pending]: (state) => {
            state.posting = true
        },
        [postOrder.fulfilled]: (state, action) => {
            state.posting = false
            state.errorMessage = null
            state.orderList.push(action.payload) // assume the payload has all the data from the backend
        },
        [postOrder.rejected]: (state, action) => {
            state.posting = false
            state.errorMessage = action.error.message // use an error property on the action (or in the payload)
            state.orderList = []
        }
    }
})

export const orderReducer = orderSlice.reducer;

export const { createOrder, deleteOrder } = orderSlice.actions;

// thunk action creator
// export const fetchEmails = function() {
//     return async function() {
//         dispatch(pendingFetching())

//         // ACTUAL BACKEND STUFF
//         const response = await fetch()
//         const data = response.json()
//         // write this to return a promise that's either fulfilled or rejected eventually


//         if(!response.ok) {
//         dispatch(rejectedFetching(response.statusText))
//         return
//         }
        
//         dispatch(fulfilledFetching(data))
//     }
// }