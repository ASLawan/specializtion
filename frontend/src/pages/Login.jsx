/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      dispatch(loginUser(formData));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (user.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/shop");
      }
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="l-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Login;
