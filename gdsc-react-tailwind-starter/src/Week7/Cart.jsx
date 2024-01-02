
import React, { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
   
  ]);

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <span>{item.quantity}</span>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </div>
      ))}
      <h3>Total: ${calculateTotal()}</h3>
      <button>Complete Purchase</button>
    </div>
  );
};

export default Cart;
