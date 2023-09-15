import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
import {updateCartQuery, removeItemFromCartMutation, saveCartQuery, deleteCartQuery, changeItemQuantity as changeItemQuantityAction} from "../queries/cart";

export const createNewCart = createAsyncThunk('cart/createNewCart', (_, thunkAPI) => {
})



const initialState = {
    cartItems: [],
    subtotal: 0,
    shippingFee: 8,
    total: 0,
    status: 'idle',
    error: null,
    openQuickBuy: {
        open: false,
        product: {}
    }
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const index = state.cartItems.findIndex(item =>
                item.productId === action.payload.productId
                && item.style === action.payload.style
                && item.size === action.payload.size);
            if (index > -1) {
                const item = state.cartItems[index];
                item.qty += action.payload.qty;
                item.totalForItem = item.qty * item.productPrice;
                state.subtotal = state.cartItems.reduce((a, c) => a + c.totalForItem, 0);
                state.total = state.subtotal + state.shippingFee;
            } else {
                state.cartItems = [...state.cartItems, {
                    ...action.payload,
                    totalForItem: action.payload.qty * action.payload.productPrice,
                    id: Math.floor(Date.now() * Math.random())
                }];
                state.subtotal = state.cartItems.reduce((a, c) => a + c.totalForItem, 0);
                state.total = state.subtotal + state.shippingFee;
            }
        },

        updateCartItem(state, action) {
            const itemToUpdate = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (state.cartItems[itemToUpdate]) {
                state.cartItems[itemToUpdate] = {
                    ...state.cartItems[itemToUpdate],
                    ...action.payload.cartItem,
                    qty: action.payload.type === "plus"
                        ? state.cartItems[itemToUpdate].qty + 1
                        : state.cartItems[itemToUpdate].qty - 1,
                    totalForItem:
                        state.cartItems[itemToUpdate].productPrice *
                        (action.payload.type === "plus"
                            ? state.cartItems[itemToUpdate].qty + 1
                            : state.cartItems[itemToUpdate].qty - 1)
                }
                state.subtotal = state.cartItems.reduce((a, c) => a + c.totalForItem, 0);
                state.total = state.subtotal + state.shippingFee;
            }
        },

        removeCartItem(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
            state.subtotal = state.cartItems.reduce((a, c) => a + c.totalForItem, 0);
            state.total = state.subtotal + state.shippingFee;
        },

        clearCart(state, action) {
            state.cartItems = [];
        },

        setFromDb(state, action) {
            state.cartItems = action.payload.products.map(product => {
                return {
                    id: product._id,
                    productId: product.product,
                    qty: product.qty,
                    size: product.size,
                    color: product.color,
                    discount: product.discount,
                    priceBeforeDiscount: product.priceBeforeDiscount,
                    price: product.price,
                    totalForItem: product.totalForItem,
                }
            });
            state.subtotal = state.cartItems.reduce((a, c) => a + c.totalForItem, 0);
            state.total = state.subtotal + state.shippingFee;
        },

        setQuickBuy(state, action) {
            state.openQuickBuy = action.payload;
        },
        closeQuickBuy(state, action) {
            state.openQuickBuy = {
                open: false,
                product: {}
            };

        }
    },
});

export const {
    addToCart,
    rupdateCartItem,
    removeCartItem,
    clearCart,
    setFromDb,
    setQuickBuy,
    closeQuickBuy
} = cartSlice.actions;


export const createCart = createAsyncThunk('cart/saveCart', async (cartData, thunkAPI) => {
    try {
        const { cart } = await saveCartQuery(cartData)
        thunkAPI.dispatch(setFromDb(cart))
    } catch (err) {
        console.error(err)
    }
})

export const addItemToCart = createAsyncThunk('cart/addItemToCart', async (cartData, thunkAPI) => {
    try {
        const { cart } = await updateCartQuery(cartData)
        thunkAPI.dispatch(setFromDb(cart))
    } catch (err) {
        console.error(err)
    }
})

export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async (itemId, thunkAPI) => {
    try {
        const { cart } = await removeItemFromCartMutation(itemId)
        thunkAPI.dispatch(setFromDb(cart))
    } catch (err) {
        console.error(err)
    }
})

export const deleteCart = createAsyncThunk('cart/deleteCartById', async (cartId, thunkAPI) => {
    try {
        await deleteCartQuery(cartId)
        thunkAPI.dispatch(setFromDb({}))
    } catch (err) {
        console.error(err)
    }
})

export const changeItemQuantity = createAsyncThunk('cart/changeItemQuantity', async ({price, qty, productId}, thunkAPI) => {
    try {
        const { cart } = await changeItemQuantityAction({price, qty, productId})
        thunkAPI.dispatch(setFromDb(cart))
    } catch (err) {
        console.error(err)
    }
})

export default cartSlice.reducer;























// import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";
// import axios from "axios";
//
// export const getCarts = createAsyncThunk(
//     'cart/getCarts',
//     async ({...arg}) => {
//         const { id, style, size } = arg;
//         try {
//             const response = await axios.get(`/api/product/${id}?style=${style}&size=${size}`)
//             return response?.data;
//         } catch (error) {
//         }
//     }
// );
//
// const initialState = {
//     cartItems: [],
//     status: 'idle',
//     error: null,
// };
// export const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart(state, action) {
//             state.cartItems = [...state.cartItems, action.payload];
//             // state.cartItems.push(action.payload);
//         },
//
//         updateCart(state, action) {
//             state.cartItems = action.payload;
//         },
//
//         emptyCart(state) {
//             state.cartItems = [];
//         },
//     },
//
//     extraReducers: builder => {
//         builder
//             .addCase(getCarts.pending, (state) => {
//                 state.status = 'loading';
//             })
//             .addCase(getCarts.fulfilled, (state, action) => {
//                 state.status = 'succeeded';
//                 state.cartItems = action.payload;
//             })
//             .addCase(getCarts.rejected, (state, action) => {
//                 state.status = "failed";
//                 state.error = action.error.message
//             })
//     }
// });
//
// export const {addToCart, updateCart, emptyCart} = cartSlice.actions;
//
// export default cartSlice.reducer;
