import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import productImage1 from '../assets/product1.jpg'; // Adjust the import paths as necessary
import productImage2 from '../assets/product2.jpg'; // Adjust the import paths as necessary

const ProductCard = ({ product }) => {
  const { dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
    alert(`${product.name} added to cart!`);
  };

  const imageUrl = product.id === 1 ? productImage1 : productImage2;

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
