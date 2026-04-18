import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import ApplicantForm from "./pages/ApplicantForm";
import Login from "./pages/Login";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { isAuthenticated } = useContext(AppContext);
  console.log("isAuthenticated in App", isAuthenticated);
  return (
    <>
      <Router>
        <Routes>
          <Route element={<ApplicantForm />} path="/" exact />
          <Route element={<Login />} path="/login" />
          <Route
            path="/admin"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
