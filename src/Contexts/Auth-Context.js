import React, { useState, useCallback, createContext, useContext } from "react";
// import AddMinutes from "Utils/AddMinutes";
import useLocalStorage from "Hooks/useLocalStorage";

const AuthContext = createContext({
  isLoggedIn: false,
  loginUser: () => {},
  logoutUser: () => {},
  username: null,
  token: null,
  expirationDate: null,
});

const AuthContextProvider = (props) => {
  const [user, setUser] = useLocalStorage("user", null);

  const isUserLoggedIn = () => {
    try {
      const userData = JSON.parse(user);
      // return userData !== null && new Date(userData.expiresIn) > new Date();
      return userData !== null
    } catch (err) {
      return false;
    }
  };

  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);

  const loginUserHandler = useCallback(
    (username = "zsherif308", token, expiresIn = 12) => {
      // const expirationDate = AddMinutes(new Date(), expiresIn).toISOString();
      const userInfo = {
        username,
        token: token,
        // expiresIn: expirationDate,
      };
      setUser(JSON.stringify(userInfo));
      setIsLoggedIn(true);
    },
    [setUser]
  );

  const logoutUserHandler = useCallback(() => {
    setUser(null);
    setIsLoggedIn(false);
  }, [setUser]);

  const value = {
    isLoggedIn,
    loginUser: loginUserHandler,
    logoutUser: logoutUserHandler,
    username: user && JSON.parse(user)?.username,
    token: user && JSON.parse(user)?.accessToken,
    expirationDate: user && JSON.parse(user)?.expiresIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};
export { useAuth, AuthContextProvider };
