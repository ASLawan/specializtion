/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="logout">
      <div className="logout-text">
        <p>Are you ready to logout?</p>
      </div>
      <div className="logout-btn">
        <button onClick={() => handleLogout()}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
