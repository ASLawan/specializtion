/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProduct } from "../../redux/productSlice";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  // console.log(`Products: ${products}`);

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
    <div className="admin-products">
      <div className="admin-products-title">
        <h2>Manage Products</h2>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr id="thead">
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(products) && products.length > 0 ? (
              products.map((product) => (
                <tr key={product._id}>
                  <th>{product.name}</th>
                  <th>{product.category}</th>
                  <th>FCFA {product.price}</th>
                  <th>{product.stock}</th>
                  <th>
                    <Link
                      to={`/admin/products/${product._id}/edit`}
                      className="edit"
                    >
                      Edit
                    </Link>{" "}
                  </th>
                  <th>
                    <button onClick={() => handleDelete(product._id)}>
                      Delete
                    </button>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="noproducts">
                  No products available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminProducts;