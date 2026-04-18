import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashboard from "./pages/AdminDashboard";
import ApplicantForm from "./pages/ApplicantForm";
import Login from "./pages/Login";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserContext";
import ApplicationForm from "./pages/ApplicationForm";
import StatusPage from "./pages/StatusPage";

function App() {
  const { isAuthenticated } = useContext(AppContext);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<ApplicationForm />} path="/form" exact />
          <Route element={<Login />} path="/login" />
          <Route element={<StatusPage />} path="/status" />
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
