import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from '../redux/cartSlice';

function ShoppingCart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section" id="cart">
      <div className="section-heading">
        <p>YOUR SELECTION</p>
        <h2>Shopping Cart</h2>
      </div>

      {cartItems.length === 0 ? (
        <p className="empty-cart">
          Your shopping cart is empty.
        </p>
      ) : (
        <div className="cart-container">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>₱{item.price.toFixed(2)}</p>
              </div>

              <div className="quantity-controls">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>
              </div>

              <p className="item-total">
                ₱{(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="remove-button"
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="cart-summary">
            <h3>
              Subtotal: ₱{subtotal.toFixed(2)}
            </h3>

            <h2>
              Total: ₱{subtotal.toFixed(2)}
            </h2>
          </div>
        </div>
      )}
    </section>
  );
}

export default ShoppingCart;