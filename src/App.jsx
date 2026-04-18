import "./App.css";
import { UserProvider } from "./context/UserContext";
import Login from "./pages/ApplicationForm";

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
