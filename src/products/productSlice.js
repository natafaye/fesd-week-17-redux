import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../data";

const productSlice = createSlice({
    name: "products",
    initialState: {
        productList: PRODUCTS
    },
    reducers: {
        createProduct: (state, action) => {
            state.productList.push({
                ...action.payload,
                id: state.productList[state.productList.length - 1].id + 1 // id hack
            })
        }
    }
})

export const productReducer = productSlice.reducer;

export const { createProduct } = productSlice.actions;