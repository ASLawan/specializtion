/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state) => state.products);

  // console.log(`Products: ${products}`);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDetails = (id) => {
    console.log(`View details for product with id: ${id}`);
    navigate(`/product/${id}`);
  };

  const handleCart = (id) => {
    console.log(`Added product with id: ${id} to cart`);
  };
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error}</p>;
  }

  return (
    <div className="client-products">
      <div className="client-products-title">
        <h2>LuXury Beads Shop</h2>
      </div>
      <div className="client-product">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} id="prod">
              <div className="prod-info">
                <div className="prod-img">{product.image}</div>
                <div className="prod-text">
                  <div className="name">{product.name}</div>
                  <div className="price">
                    <span>Price:</span> FCFA {product.price}
                  </div>
                  <div className="stock">
                    <span>Stock:</span> {product.stock}
                  </div>
                </div>
              </div>
              <div className="actions">
                <button onClick={() => handleDetails(product._id)} id="view">
                  View
                </button>
                <button onClick={() => handleCart(product._id)} id="addto">
                  Add to cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h3 colSpan="6" className="noproducts">
              No products available
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
