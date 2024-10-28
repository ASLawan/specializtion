import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../redux/productSlice";
import { Link } from "react-router-dom";

const AdminProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error}</p>;
  }

  return (
    <div>
      <h2>Manage Products</h2>
      <Link to="/admin/products/new">Add New Product</Link>
      <ul>
        {products.map((product) => {
          <li key={product._id}>
            {product.name} - FCFA{product.price}
            <Link to={`/admin/products/${product._id}/edit`}>Edit</Link>
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default AdminProductList;
