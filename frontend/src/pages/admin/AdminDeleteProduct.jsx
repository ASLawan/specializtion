/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux/productSlice";
import { useNavigate } from "react-router-dom";

const AdminDeleteProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id))
      .unwrap()
      .then(() => {
        setMessage("Product deleted successfully.");
        setShowMessage(true);
        navigate("/admin/products");
      })
      .catch(() => {
        setMessage("Failed to delete the product. Try again.");
        setShowMessage(true);
      });
  };

  const cancelDelete = () => {
    navigate("/admin/products");
  };

  return (
    <div className="admin-delete">
      <div className="logout-text">
        <p>Are you ready to Delete?</p>
      </div>
      <div className="btns">
        <div className="logout-btn">
          <button onClick={() => handleDelete()}>Delete</button>
        </div>
        <div className="cancel-btn">
          <button onClick={() => cancelDelete()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDeleteProduct;
