/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { editProduct, fetchProductById } from "../../redux/productSlice";

const AdminEditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { product, loading, error } = useSelector((state) => state.products);

  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    image: null,
    stock: 0,
  });

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id))
        .unwrap()
        .then((fetchedProduct) => setProductDetails(fetchedProduct))
        .catch(() => setMessage("Failed to load product data"));
    }
  }, [dispatch, id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setProductDetails({
      ...productDetails,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProduct({ id, ...productDetails }))
      .unwrap()
      .then(() => {
        setMessage("Product updated successfully");
        setShowMessage(true);
        setTimeout(() => navigate("/admin/products"), 2000);
      })
      .catch(() => {
        setMessage("Failed to update product, try again");
        setShowMessage(true);
      });
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="admin-edit-product">
      <h2>Edit Product</h2>
      {showMessage && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={productDetails.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={productDetails.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={productDetails.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="stock"
          placeholder="Stock"
          value={productDetails.stock}
          onChange={handleChange}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          placeholder="Image"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={productDetails.description}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default AdminEditProduct;
