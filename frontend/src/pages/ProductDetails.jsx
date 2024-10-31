/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../redux/productSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  //   console.log(`id: ${id}`);
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductById(id)); // Fetch product details by ID
  }, [dispatch, id]);

  console.log(`Product: ${product}`);
  if (loading) {
    return <p>Loading product details...</p>;
  }

  if (error) {
    return <p>Error loading product: {error}</p>;
  }
  if (!product) {
    return <p>No product details loading....</p>;
  }
  return (
    <div className="product-detail">
      <div className="title">
        <h2>{product?.name}</h2>
      </div>
      <div className="content">
        <div className="product-img">
          <img
            src={`http://localhost:5000/${product.image}`}
            alt={product?.name}
            width={250}
            height={250}
          />
        </div>
        <div className="product-info">
          <p>
            <span>Price:</span> FCFA{product?.price}
          </p>
          <p>
            <span>Stock:</span> {product?.stock}
          </p>
          <p>
            <span>Category:</span> {product?.category}
          </p>
        </div>
        <div className="product-actions">
          <Link to="/shop" className="btn">
            <button id="btn">Back</button>
          </Link>
          <Link to="#" className="btn">
            <button id="btn">Add to Cart</button>
          </Link>
        </div>
      </div>
      <div className="desc">
        <h3>Product Description:</h3>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
