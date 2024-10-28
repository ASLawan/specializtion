/* eslint-disable no-unused-vars */
import React from "react";
import Sidebar from "../components/Sidebar";
import { Link, Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <AdminNavbar user={user} />
      <div className="admin-dashboard">
        <div className="aside">
          <aside className="admin-sidebar">
            <nav id="nav">
              <ul>
                <li>
                  <Link to="/admin/products" className="admin-nav-link">
                    Manage Products
                  </Link>
                </li>
                <li>
                  <Link to="/admin/addproduct" className="admin-nav-link">
                    Add Product
                  </Link>
                </li>
                <li>
                  <Link to="/admin/orders" className="admin-nav-link">
                    Manage Orders
                  </Link>
                </li>
                <li>
                  <Link to="/admin/users" className="admin-nav-link">
                    Manage Users
                  </Link>
                </li>
                <li>
                  <Link to="/admin/adduser" className="admin-nav-link">
                    Add User
                  </Link>
                </li>
                {/* <li>
              <Link to="/admin/settings">Settings</Link>
            </li> */}
              </ul>
            </nav>
          </aside>
        </div>
        <div className="main">
          <div className="title">Content</div>
          <div className="outlet">
            <main className="admin-content">
              {/* This will render the selected section, i.e., products, orders, etc. */}

              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
