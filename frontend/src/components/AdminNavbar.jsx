/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = ({ user }) => {
  return (
    <nav>
      <div className="nav-container" id="admin">
        <Link to="/" className="logo">
          <h3 id="logo-text">LuXury Beads</h3>
        </Link>
        <span>DASHBOARD</span>
        <ul className="nav-links" id="admin-link">
          <li>
            <Link to="/admin" className="link" id="admin-link">
              Hello, {user?.name || "Admin"}
            </Link>
          </li>
        </ul>
        <Link to="/logout" className="cart" id="admin-link">
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;
