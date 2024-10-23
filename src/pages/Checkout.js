import React from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { state, dispatch } = useCart();

  const handleCheckout = () => {
    alert('Checkout successful!');
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div>
      <h2>Checkout</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h3>Your Cart Items:</h3>
          {state.items.map((item) => (
            <div key={item.id}>
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <button onClick={handleCheckout}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
