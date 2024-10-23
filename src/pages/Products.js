import React from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 10.0 },
    { id: 2, name: 'Product 2', price: 20.0 },
    // Add more products as needed
  ];

  return (
    <div className="products-page">
      <h2>Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
