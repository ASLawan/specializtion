import React from "react";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

const Navbar = ({ user }) => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          Hello, {user?.name || "Customer!"}
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              Login
            </Link>
          </li>
        </ul>
        {/* <Link to="/" className="cart">
          Cart
        </Link> */}
        <Link to="/cart" className="cart">
          <CartBadge />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
