/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-info">
        <div className="logo-text">
          <h2>LuXury Beads</h2>
          <span>Creating Magic With Beads</span>
        </div>
        <div className="logo-img">
          <img
            src="../../assets/imgs/logo.png"
            width="400"
            height="350"
            alt="Logo Image"
          />
        </div>
      </div>
      <div id="shop">
        <Link to="/shop" className="shop-link">
          Visit our Shop
        </Link>
      </div>
    </div>
  );
};

export default Header;
