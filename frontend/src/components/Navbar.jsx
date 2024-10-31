/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import React from "react";
// import { Link } from "react-router-dom";
// import CartBadge from "./CartBadge";

// const Navbar = ({ user }) => {
//   return (
//     <nav>
//       <div className="nav-container">
//         <Link to="/" className="logo">
//           Hello, {user?.name || "Customer!"}
//         </Link>
//         <ul className="nav-links">
//           <li>
//             <Link to="/" className="link">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/shop" className="link">
//               Shop
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="link">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="link">
//               Contact
//             </Link>
//           </li>
//           <li>
//             <Link to="/signup" className="link">
//               Sign Up
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className="link">
//               Login
//             </Link>
//           </li>
//           <li>
//             <Link to="/logout" className="link">
//               Logout
//             </Link>
//           </li>
//           <li>
//             <Link to="/admin" className="link">
//               Dashboard
//             </Link>
//           </li>
//         </ul>
//         {/* <Link to="/" className="cart">
//           Cart
//         </Link> */}
//         <Link to="/cart" className="cart">
//           <CartBadge />
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

const Navbar = ({ user }) => {
  const isLoggedIn = !!user; // Checks if the user is logged in
  const isAdmin = user?.isAdmin; // Checks if the logged-in user is an admin

  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="logo">
          Hello, {user?.name || ""}
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

          {/* Conditional Links based on user status */}
          {!isLoggedIn ? (
            <>
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
            </>
          ) : (
            <li>
              <Link to="/logout" className="link">
                Logout
              </Link>
            </li>
          )}

          {/* Show Dashboard link if the user is an admin */}
          {isLoggedIn && isAdmin && (
            <li>
              <Link to="/admin" className="link">
                Dashboard
              </Link>
            </li>
          )}
        </ul>

        <Link to="/cart" className="cart">
          <CartBadge />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
