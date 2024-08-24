import React, { createContext, useContext } from "react";

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userContextValue, setUserContextValue] = React.useState({
    user: null,
    userId: null,
    accessToken: null,
    email: null,
    userMapDetails: null,
  });
  return (
    <UserContext.Provider value={{ userContextValue, setUserContextValue }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};

export { UserContext, UserContextProvider, useUserContext };
