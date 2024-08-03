import React from 'react';
import './CartItem.css';  // Add your CSS for styling

const CartItem = ({ item, onIncrease, onDecrease, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.name} />
      <div className="details">
        <h4>{item.name}</h4>
        <p>Unit price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={onRemove}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;
