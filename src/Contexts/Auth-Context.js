import React, { useState, useCallback } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  setLoggedIn: () => {},
  setLoggedOut: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginUserHandler = useCallback((username, password) => {
    setIsLoggedIn(true);
  }, []);

  const logoutUserHandler = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        setLoggedIn: loginUserHandler,
        setLoggedOut: logoutUserHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
