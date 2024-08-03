import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';
import './ShoppingCartPage.css';

const ShoppingCartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id, quantity) => {
    dispatch(updateQuantity(id, quantity));
  };

  const totalCost = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="shopping-cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <p>Total: ${item.price * item.quantity}</p>
              <button className="remove-button" onClick={() => handleRemoveFromCart(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <h3>Total Cart Amount: ${totalCost}</h3>
      <div className="cart-actions">
        <button className="continue-shopping-button" onClick={() => window.location.href = '/products'}>Continue Shopping</button>
        <button className="checkout-button" onClick={() => alert('Coming Soon!')}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
