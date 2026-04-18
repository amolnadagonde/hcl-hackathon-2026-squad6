import "./App.css";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/ApplicationForm";
import StatusPage from "./pages/StatusPage";

function App() {
  return (
    <>
      <UserProvider>
      <Login />
      </UserProvider>
    </>
  );
}

export default App;
