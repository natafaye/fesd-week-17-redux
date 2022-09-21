import { createSlice } from "@reduxjs/toolkit";
import { ORDERS } from "../data";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        orderList: ORDERS
    },
    reducers: {
        createOrder: (state, action) => {
            state.orderList.push({
                ...action.payload,
                id: state.orderList[state.orderList.length - 1].id + 1 // id hack - breaks if all orders are deleted
            })
        },
        deleteOrder: (state, action) => {
            state.orderList = state.orderList.filter(order => order.id !== action.payload)
        }
    }
})

export const orderReducer = orderSlice.reducer;

export const { createOrder, deleteOrder } = orderSlice.actions;