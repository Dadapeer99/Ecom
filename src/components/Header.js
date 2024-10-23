import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { state } = useCart();

  return (
    <header>
      <h1>E-commerce App</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({state.items.length})</Link>
        <Link to="/checkout">Checkout</Link>
      </nav>
    </header>
  );
};

export default Header;
