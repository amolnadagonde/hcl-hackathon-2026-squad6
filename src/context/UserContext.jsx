import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([
    {
      id: "1",
      name: "Alice",
      dob: "1990-01-01",
      pancard: "ABCDE1234F",
      email: "alice@example.com",
      mobile: "9876543210",
      creditScore: "750",
      annualIncome: "5,00,000",
    },
    {
      id: "2",
      name: "Bob",
      dob: "1985-05-15",
      pancard: "PQRSX5678Z",
      email: "bob@example.com",
      mobile: "9123456789",
      creditScore: "680",
      annualIncome: "200000",
    },
  ]);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
    window.localStorage.setItem("users", JSON.stringify(users));
  };

  return (
    <UserContext.Provider value={{ users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
