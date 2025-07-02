import { createSlice } from "@reduxjs/toolkit"

const initialState = {
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
        removeCart(state, action) {
            //payload = pizzaId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload);
        },
        increaseCartQuantity(state, action) {
            //payload === pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseCartQuantity(state, action) {
            //payload === pizzaId
            const item = state.cart.find(item => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;

            if(item.quantity === 0) {
                cartSlice.caseReducers.removeCart(state, action)
            }
        },
        clearCart(state) {
            state.cart = []
        }
    }
})

export const {addCart, removeCart, increaseCartQuantity, decreaseCartQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer

export const getCart = (store) => store.cart.cart;

export const getTotalCartPrice = (store) => {
    return store.cart.cart.reduce((acc, item) => acc + item.totalPrice, 0);
}

export const getTotalCartQuantity = (store) =>{
    return store.cart.cart.reduce((acc, cur) => acc + cur.quantity, 0);
}

export const getCurrentQuantityById = (id) => (store) => {
    return store.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0
} 