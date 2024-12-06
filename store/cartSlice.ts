import { createSlice } from '@reduxjs/toolkit';

// Initial state with some example items
const initialState = {
  items: [
    { productId: '1', name: 'Product 1', price: 25, quantity: 1 },
    { productId: '2', name: 'Product 2', price: 50, quantity: 2 },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add or update an item in the cart
    addToCart: (state, action) => {
      const { productId, name, price } = action.payload;
      // Check if the item is already in the cart
      const existingItem = state.items.find(item => item.productId === productId);
      
      if (existingItem) {
        // If item exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If item does not exist, add it to the cart
        state.items.push({ productId, name, price, quantity: 1 });
      }
    },
    
    // Remove an item from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.productId !== action.payload.productId);
    },
    
    // Update the quantity of an item in the cart
    updateQuantity: (state, action) => {
      const item = state.items.find(item => item.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
