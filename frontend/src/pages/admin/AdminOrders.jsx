/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders, deleteOrder } from "../../redux/orderSlice";

const AdminOrders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  if (loading) {
    return <p>Loading orders</p>;
  }

  if (error) {
    return <p>Error fetching orders: {error}</p>;
  }

  return (
    <div className="admin-orders">
      <div className="admin-orders-title">
        <h2>Manage Orders</h2>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Products</th>
              <th>Total Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) && orders.length > 0 ? (
              orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.userId}</td>
                  <td>
                    {order.products.map((product, index) => (
                      <div key={index}>
                        {product.name} (Qty: {product.quantity})
                      </div>
                    ))}
                  </td>
                  <td>FCFA {order.totalAmount}</td>
                  <td>{new Date(order.date).toLocaleDateString()}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(order._id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No orders available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;
