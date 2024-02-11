// CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Create a new context
export const CartContext = createContext();

// Custom hook to consume the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// Create a CartProvider component to manage the cart state
export const CartProvider = ({ children }) => {
  // State to manage the cart items
  const [cart, setCart] = useState([]);

  // Function to update the quantity of an item in the cart
  const updateQuantity = (itemId, newQuantity) => {
    setCart(prevCart => {
      // Find the item in the cart
      const updatedCart = prevCart.map(item => {
        if (item.id === itemId) {
          // Update the quantity of the item
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      return updatedCart;
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, item]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
