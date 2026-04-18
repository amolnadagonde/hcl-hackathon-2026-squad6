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
    </div>
  );
}

export default Login;
