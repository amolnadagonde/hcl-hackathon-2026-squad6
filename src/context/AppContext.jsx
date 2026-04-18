import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
