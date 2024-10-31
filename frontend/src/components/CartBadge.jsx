/* eslint-disable no-unused-vars */
// CartBadge.js
import React from "react";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <span>Cart: {totalItems ? { totalItems } : "(empty)"}</span>
    </div>
  );
};

export default CartBadge;
