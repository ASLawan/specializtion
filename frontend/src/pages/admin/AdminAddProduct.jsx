/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/productSlice";

const AdminAddProduct = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.products);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    desscription: "",
    category: "",
    image: "",
    stock: 0,
  });

  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product))
      .unwrap()
      .then(() => {
        setMessage("Product added Successfully");
        setShowMessage(true);
        setProduct({
          name: "",
          price: "",
          desscription: "",
          category: "",
          image: "",
          stock: 0,
        });
      })
      .catch(() => {
        setMessage("Failed to add product, try again");
        setShowMessage(true);
      });
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="admin-add-product">
      <h2>Add New Product</h2>
      {showMessage && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
        />
        <input
          type="text"
          name="stock"
          placeholder="Stock"
          onTouchCancel={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AdminAddProduct;
