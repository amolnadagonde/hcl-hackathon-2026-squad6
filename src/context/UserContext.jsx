// src/context/UserContext.jsx
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    dob: "",
    pancard: "",
    email: "",
    mobile: "",
    creditScore: "",
    annualIncome: ""
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};