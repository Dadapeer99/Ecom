import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;