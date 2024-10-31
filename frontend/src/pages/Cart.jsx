/* eslint-disable no-unused-vars */
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart, updateCart, removeFromCart } from "../redux/cartSlice";

const Cart = ({ userId }) => {
  const dispatch = useDispatch();
  const { cartItems, loading, error } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchCart(userId));
  }, [dispatch, userId]);

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateCart({ userId, productId, quantity }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(removeFromCart({ userId, productId }));
  };

  const handleCheckout = async () => {
    try {
      alert("Proceeding to checkout...");
      // Add checkout logic here
    } catch (error) {
      console.error("Checkout failed", error);
    }
  };

  // Calculate total amount using useMemo to avoid recalculations
  const totalAmount = useMemo(() => {
    return cartItems
      .reduce((sum, item) => sum + item.productId.price * item.quantity, 0)
      .toFixed(2);
  }, [cartItems]);

  return (
    <div className="cart-products" id="cart-products">
      <h2>Your Cart</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {cartItems && cartItems.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.productId}>
                  <td>
                    <img
                      src={item.productId.image}
                      alt={item.productId.name}
                      width={50}
                    />
                  </td>
                  <td>{item.productId.name}</td>
                  <td>${item.productId.price.toFixed(2)}</td>
                  <td>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        handleQuantityChange(item.productId, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        handleQuantityChange(
                          item.productId,
                          item.quantity > 1 ? item.quantity - 1 : 1
                        )
                      }
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemoveItem(item.productId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="cart-total">
            <p>Total: ${totalAmount}</p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
