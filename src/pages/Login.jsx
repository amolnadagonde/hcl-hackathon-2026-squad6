import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated, setAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    // set login to true
    setAuthenticated(true);
    navigate("/admin");
  };

  return (
    <div>
      Login {isAuthenticated ? "Logged In" : "Guest"}
      <button onClick={handleLogin}>Login as Admin</button>
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin" && password === "admin") {
      alert("Admin Login Successful");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>Admin Login</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}


export default Login;