// // /* eslint-disable no-unused-vars */
// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import axios from "axios";
// // import { loginUser, logout } from "./redux/authSlice";
// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// //   Navigate,
// // } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Home from "./pages/HomePage";
// // import Shop from "./pages/Shop";
// // import About from "./pages/About";
// // import Contact from "./pages/Contact";
// // import Signup from "./pages/Signup";
// // import Header from "./components/Header";
// // import Footer from "./components/Footer";
// // import Login from "./pages/login";
// // import AdminRoute from "./components/AdminRoute";
// // import AdminDashboard from "./pages/AdminDashboard";
// // import AdminProducts from "./pages/admin/AdminProducts";
// // import AdminOrders from "./pages/admin/AdminOrders";
// // import AdminUsers from "./pages/admin/AdminUsers";
// // import AdminAddProduct from "./pages/admin/AdminAddProduct";
// // import AdminAddUser from "./pages/admin/AdminAddUser";
// // import Cart from "./pages/Cart";
// // import ProductDetails from "./pages/ProductDetails";
// // import "./App.css";

// // const App = () => {
// //   const { user, token, isAdmin } = useSelector((state) => state.auth);
// //   const dispatch = useDispatch();

// //   useEffect(() => {
// //     if (token) {
// //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
// //       dispatch(loginUser(token));
// //     }
// //   }, [dispatch, token]);

// //   return (
// //     <Router>
// //       <Navbar user={user} isAdmin={isAdmin} />
// //       <Header />
// //       <Routes>
// //         <Route path="/" element={<Home />} />
// //         <Route path="/shop" element={<Shop />} />
// //         <Route path="/about" element={<About />} />
// //         <Route path="/contact" element={<Contact />} />

// //         {!user && (
// //           <>
// //             <Route path="/login" element={<Login />} />
// //             <Route path="/signup" element={<Signup />} />
// //           </>
// //         )}

// //         <Route path="/cart" element={<Cart />} />
// //         <Route path="/product/:id" element={<ProductDetails />} />

// //         {user && (
// //           <Route
// //             path="/logout"
// //             element={<button onClick={() => dispatch(logout())}>Logout</button>}
// //           />
// //         )}

// //         {isAdmin && (
// //           <Route
// //             path="/admin"
// //             element={
// //               <AdminRoute>
// //                 <AdminDashboard />
// //               </AdminRoute>
// //             }
// //           >
// //             <Route path="products" element={<AdminProducts />} />
// //             <Route path="addproduct" element={<AdminAddProduct />} />
// //             <Route path="orders" element={<AdminOrders />} />
// //             <Route path="users" element={<AdminUsers />} />
// //             <Route path="adduser" element={<AdminAddUser />} />
// //           </Route>
// //         )}

// //         <Route path="*" element={<Navigate to="/" />} />
// //       </Routes>
// //       <Footer />
// //     </Router>
// //   );
// // };

// // export default App;

// /* eslint-disable no-unused-vars */
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import axios from "axios";
// import { loginUser, logout } from "./redux/authSlice";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   useLocation,
// } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/HomePage";
// // import Shop from "./pages/ProductList";
// import Shop from "./pages/Shop";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Signup from "./pages/Signup";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Login from "./pages/login";
// import AdminRoute from "./components/AdminRoute";
// import AdminDashboard from "./pages/AdminDashboard";
// import AdminProducts from "./pages/admin/AdminProducts";
// import AdminOrders from "./pages/admin/AdminOrders";
// import AdminUsers from "./pages/admin/AdminUsers";
// import AdminAddProduct from "./pages/admin/AdminAddProduct";
// import AdminAddUser from "./pages/admin/AdminAddUser";
// import "./App.css";
// import Cart from "./pages/Cart";
// import ProductDetails from "./pages/ProductDetails";
// import Logout from "./components/Logout";

// const App = () => {
//   // const navigate = useNavigate();
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const token = useSelector((state) => state.auth.token);
//   const location = useLocation();

//   useEffect(() => {
//     if (token) {
//       // Optionally, you can make an API call here to validate the token
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//       // Load the user profile if the token is valid
//       dispatch(loginUser(token));
//     }
//   }, [dispatch, token]);
//   return (
//     <>
//       <Router>
//         <Navbar user={user} />
//         {location.pathname === "/" && <Header />}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route
//             path="/admin"
//             element={
//               <AdminRoute>
//                 <AdminDashboard />
//               </AdminRoute>
//             }
//           >
//             <Route path="products" element={<AdminProducts />} />
//             <Route path="addproduct" element={<AdminAddProduct />} />
//             <Route path="orders" element={<AdminOrders />} />
//             <Route path="users" element={<AdminUsers />} />
//             <Route path="adduser" element={<AdminAddUser />} />
//           </Route>
//           <Route path="/cart" element={<Cart />} />
//           {/* <Route path="*" element={<navigate to="/" />} /> */}
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/products/:id" element={<ProductDetails />} />
//         </Routes>
//       </Router>
//       <Footer />
//     </>
//   );
// };

// export default App;

/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginUser } from "./redux/authSlice";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/HomePage";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/login";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminAddProduct from "./pages/admin/AdminAddProduct";
import AdminEditProduct from "./pages/admin/AdminEditProduct";
import AdminDeleteProduct from "./pages/admin/AdminDeleteProduct";
import AdminAddUser from "./pages/admin/AdminAddUser";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Logout from "./components/Logout";
import "./App.css";

// Main AppContent component to handle routing and conditional rendering
const AppContent = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return (
    <>
      <Navbar user={user} />
      {location.pathname === "/" && <Header />}{" "}
      {/* Render Header only on the homepage */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        >
          <Route path="products" element={<AdminProducts />} />
          <Route path="addproduct" element={<AdminAddProduct />} />
          <Route path="editproduct/:id" element={<AdminEditProduct />} />
          <Route path="delproduct/:id" element={<AdminDeleteProduct />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="adduser" element={<AdminAddUser />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
};

// Main App component to set up the Router
const App = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      dispatch(loginUser(token));
    }
  }, [dispatch, token]);

  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
