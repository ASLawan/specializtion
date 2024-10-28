/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  // console.log(`User Auth and Admin check:`);
  // console.log(`IsAmin: ${user.isAdmin}`);
  // console.log(`IsAuthenticated: ${isAuthenticated}`);
  if (!isAuthenticated || !user.isAdmin) {
    return <Navigate to="/shop" replace />;
  }
  return children;
};

export default AdminRoute;
