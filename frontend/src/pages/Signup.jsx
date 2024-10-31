/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email !== "" &&
      formData.password !== "" &&
      formData.name !== ""
    ) {
      dispatch(signupUser(formData));
    }
    console.log(`Sign success payload: ${formData}`);
  };

  if (isAuthenticated) {
    navigate("/login");
  }
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="s-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
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
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Signup;
