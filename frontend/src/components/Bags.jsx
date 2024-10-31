/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice";
import { useNavigate } from "react-router-dom";
import { truncateName } from "../utils/helper";

const Bags = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDetails = (id) => {
    console.log(`View details for product with id: ${id}`);
    navigate(`/products/${id}`);
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

  // Filter only "necklace" products
  const bagProducts = products
    .filter((product) => product.category === "Bags")
    .slice(0, 5);

  return (
    <div className="client-products">
      {/* <div className="client-products-title">
        <h2>LuXury Beads Shop</h2>
      </div> */}
      <div className="client-product">
        {Array.isArray(bagProducts) && bagProducts.length > 0 ? (
          bagProducts.map((product) => (
            <div key={product._id} id="prod">
              <div className="prod-info">
                <div className="prod-img">
                  <img
                    src={`http://localhost:5000/${product.image}`}
                    alt={product?.name}
                    width={150}
                    height={150}
                  />
                </div>
                <div className="prod-text">
                  <div className="name">{truncateName(product.name)}</div>
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
            <h3 className="noproducts">No Bags products available</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bags;
