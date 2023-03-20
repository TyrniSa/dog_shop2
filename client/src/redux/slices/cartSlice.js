import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      // state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct:(state,action)=>{
      const productId = action.payload;
      state.products = state.products.filter((item)=> item.id !== productId);
      state.quantity = state.quantity - 1;
    },
    increase:(state, {payload}) =>{
      const product = state.products.find((item)=>item.id === payload.id);
      // product.quantity = product.quantity +1;
      product.quantity = product.quantity + payload.quantity; 
      state.total = product.price * product.quantity;
    },
    decrease:(state, {payload}) =>{
      const product = state.products.find((item)=>item.id === payload.id);
      product.quantity = product.quantity - 1;
      state.total = product.price * product.quantity;
    },
    clearCart: (state) => {
      return {products: [], quantity: 0, total: 0};
    },
    calculateTotals: (state) =>{
      let quantity = 0;
      let total = 0;
      state.products.forEach((item)=>{
        quantity +=item.quantity;
        total += item.quantity * item.price;
      });
      state.quantity = quantity;
      state.total = total;
    }
  },
});

export const { addProduct, removeProduct, clearCart, increase, decrease,
   calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;