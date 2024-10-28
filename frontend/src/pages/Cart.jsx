/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// // Cart.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchCart,
//   addToCart,
//   updateCart,
//   removeFromCart,
// } from "../redux/cartSlice";

// const Cart = ({ userId }) => {
//   const dispatch = useDispatch();
//   const { cartItems, loading, error } = useSelector((state) => state.cart);

//   useEffect(() => {
//     dispatch(fetchCart(userId));
//   }, [dispatch, userId]);

//   const handleQuantityChange = (productId, quantity) => {
//     dispatch(updateCart({ userId, productId, quantity }));
//   };

//   const handleRemoveItem = (productId) => {
//     dispatch(removeFromCart({ userId, productId }));
//   };

//   const handleCheckout = async () => {
//     try {
//       // Checkout logic; placeholder to show a checkout action
//       alert("Proceeding to checkout...");
//     } catch (error) {
//       console.error("Checkout failed", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Your Cart</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error}</p>}
//       {cartItems && cartItems.length > 0 ? (
//         <>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.productId}>
//                 <img
//                   src={item.productId.image}
//                   alt={item.productId.name}
//                   width={50}
//                 />
//                 <p>{item.productId.name}</p>
//                 <p>${item.productId.price}</p>
//                 <p>Quantity: {item.quantity}</p>
//                 <button
//                   onClick={() =>
//                     handleQuantityChange(item.productId, item.quantity + 1)
//                   }
//                 >
//                   +
//                 </button>
//                 <button
//                   onClick={() =>
//                     handleQuantityChange(
//                       item.productId,
//                       item.quantity > 1 ? item.quantity - 1 : 1
//                     )
//                   }
//                 >
//                   -
//                 </button>
//                 <button onClick={() => handleRemoveItem(item.productId)}>
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <button onClick={handleCheckout}>Proceed to Checkout</button>
//         </>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//       {/* <button onClick={handleCheckout}>Proceed to Checkout</button> */}
//     </div>
//   );
// };

// export default Cart;

import React, { useEffect } from "react";
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
    } catch (error) {
      console.error("Checkout failed", error);
    }
  };

  return (
    <div className="cart-products" id="cart-products">
      <div className="cart-products-title">
        <h2>Your Cart</h2>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {cartItems && cartItems.length > 0 ? (
        <>
          <table className="table">
            <thead>
              <tr id="thead">
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
                      onClick={() =>
                        handleQuantityChange(item.productId, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                    <span>{item.quantity}</span>
                    <button
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
                    <button onClick={() => handleRemoveItem(item.productId)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      ) : (
        <tr>
          <td colSpan="6" className="noCartProducts">
            Your cart is empty.
          </td>
        </tr>
      )}
    </div>
  );
};

export default Cart;
