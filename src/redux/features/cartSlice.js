const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const isExists = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!isExists) {
        state.cart.push(action.payload);
        return;
      } else {
        let isExceeds = false;
        const newState = state.cart.map((product) => {
          if (product.id === action.payload.id) {
            if (product.quantity + action.payload.quantity > 5) {
              isExceeds = true;
            }
            return {
              ...product,
              quantity: product.quantity + action.payload.quantity,
            };
          }
          return product;
        });
        if (isExceeds) {
          alert("order exceeds maximum limit of 5, kindly check your cart");
          return state;
        } else return { cart: newState };
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
