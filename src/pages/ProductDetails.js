import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  
  // You could fetch the product details based on the id here
  
  return (
    <div>
      <h2>Product Details for Product ID: {id}</h2>
      {/* Display more product details here */}
    </div>
  );
};

export default ProductDetails;
