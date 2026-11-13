import React from 'react';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector(
    state => state.cart.cartItems
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        🌿 Green Haven
      </div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Plants</a>
        <a href="#about">About</a>
      </div>

      <div className="cart-link">
        🛒 Cart ({cartCount})
      </div>
    </nav>
  );
}

export default Navbar;