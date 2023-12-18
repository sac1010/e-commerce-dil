const { createSlice } = require("@reduxjs/toolkit");

let prevCart =  [];

if (typeof window !== "undefined") {
   prevCart = JSON.parse(localStorage.getItem("cart")) || [];
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: prevCart || [],
  },
  reducers: {
    removeFromCart: (state, action) => {
      const newArr = state.cart.filter((item) => action.payload.id !== item.id);
      localStorage.setItem("cart", JSON.stringify(newArr));
      return { cart: newArr };
    },
    emptyCart: () => {
      localStorage.setItem("cart", JSON.stringify([]));
      return { cart: [] };
    },
    addToCart: (state, action) => {
      const isExists = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (!isExists) {
        const newCart = [...state.cart, action.payload];
        localStorage.setItem("cart", JSON.stringify(newCart));
        return { cart: newCart };
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
        } else {
          localStorage.setItem("cart", JSON.stringify(newState));
          return { cart: newState };
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart, emptyCart} = cartSlice.actions;
