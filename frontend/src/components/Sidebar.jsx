import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav>
      <div className="side-container">
        <Link to="/admin" className="side-logo"></Link>
        <ul className="side-links">
          <li>
            <Link to="/admin" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/admin/users" className="link">
              Users
            </Link>
          </li>
          <li>
            <Link to="/admin/orders" className="link">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/admin/products" className="link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/admin/logout" className="cart">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
