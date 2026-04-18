import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated, setAuthenticated } = useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin" && password === "admin") {
      alert("Admin Login Successful");
      setAuthenticated(true);
      navigate("/admin");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      Login {isAuthenticated ? "Logged In" : "Guest"}
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
  );
}

export default Login;
