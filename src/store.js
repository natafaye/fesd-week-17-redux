import { configureStore } from "@reduxjs/toolkit";
import { orderReducer } from "./orders/orderSlice";
import { productReducer } from "./products/productSlice";
import { userReducer } from "./users/userSlice";

export const store = configureStore({
    reducer: {
        orders: orderReducer,
        users: userReducer,
        products: productReducer
    }
})