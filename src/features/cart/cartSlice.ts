import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { cartItem } from "../../types";
import type {RootState} from '../../store'
// import type { PayloadAction } from "@reduxjs/toolkit";

type Cart = {
    cart: cartItem[]
}

const initialState: Cart = {
    cart: []
    // cart: [
    //     {
    //         pizzaId: 6,
    //         name: 'Vegetale',
    //         quantity: 2,
    //         unitPrice: 13,
    //         totalPrice: 26,
    //     }
    // ]
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart(state, action) {
            //payload = new order
            state.cart.push(action.payload);
        },
        removeCart(state, action: PayloadAction<number>) {
            //payload = pizzaId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseCartQuantity(state, action:PayloadAction<number>) {
            //payload === pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            if (item) {
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
            }
        },
        decreaseCartQuantity(state, action: PayloadAction<number>) {
            //payload === pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            if(item) {
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
    
                if(item.quantity === 0) {
                    cartSlice.caseReducers.removeCart(state, action)
                }
            }
        },
        clearCart(state) {
            state.cart = []
        }
    }
})

export const {addCart, removeCart, increaseCartQuantity, decreaseCartQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer

//////////////////////////////////////////////////////////////////////////////////////////////////

// CREATING ALL CART FUNCTIONS IN THE SLICE (ONE CENTRAL PLACE) TO MAKE THEM AVAILABLE FOR USE THROUGH THE APP.

// get the cart pizzas
export const getCart = (store: RootState) => store.cart.cart;

// getting the total price of cart pizza
export const getTotalCartPrice = (store:RootState) => {
    return store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
}

// getting the total quantities of the cart item
export const getTotalCartQuantity = (store:RootState) =>{
    return store.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
}

// getting current cart pizza by id for the quantity display in the UI
export const getCurrentQuantityById = (id: number) => (store:RootState) => {
    return store.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0
} 