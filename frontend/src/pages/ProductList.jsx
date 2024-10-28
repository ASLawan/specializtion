import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  if (loading) {
    return <p>Loading products....</p>;
  }

  if (error) {
    return <p>Error fetching products: {error}</p>;
  }

  return (
    <div className="product-list">
      <h2>Product Listing</h2>
      <ul>
        {products.map((product) => {
          <li key={product._id}>
            <p>{product.name}</p>
            <p>FCFA{product.price}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
