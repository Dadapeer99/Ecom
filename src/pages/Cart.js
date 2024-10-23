import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {state.items.map((item) => (
            <div key={item.id}>
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
            </div>
          ))}
          <Link to="/checkout">
            <button>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
