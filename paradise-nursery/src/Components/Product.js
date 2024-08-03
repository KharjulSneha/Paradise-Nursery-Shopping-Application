import React from 'react';
import './Product.css';

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <div className="cover" />
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
