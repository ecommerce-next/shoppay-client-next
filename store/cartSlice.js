import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import axios from "axios";

export const getCarts = createAsyncThunk(
    'cart/getCarts',
    async ({...arg}) => {
        const { id, style, size } = arg;
        try {
            const response = await axios.get(`/api/product/${id}?style=${style}&size=${size}`)
            return response?.data;
        } catch (error) {
        }
    }
);

const initialState = {
    cartItems: [],
    status: 'idle',
    error: null,
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            state.cartItems = [...state.cartItems, action.payload];
            // state.cartItems.push(action.payload);
        },

        updateCart(state, action) {
            state.cartItems = action.payload;
        },

        emptyCart(state) {
            state.cartItems = [];
        },
    },

    extraReducers: builder => {
        builder
            .addCase(getCarts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getCarts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.cartItems = action.payload;
            })
            .addCase(getCarts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message
            })
    }
});

export const {addToCart, updateCart, emptyCart} = cartSlice.actions;

export default cartSlice.reducer;
