import React, { useState, useCallback, createContext } from "react";
import AddMinutes from "Utils/AddMinutes";
import useLocalStorage from "Hooks/useLocalStorage";

const AuthContext = createContext({
  isLoggedIn: false,
  loginUser: () => {},
  logoutUser: () => {},
  username: null,
  token: null,
  expirationDate: null,
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useLocalStorage("user", null);

  const isUserLoggedIn = () => {
    try {
      const userData = JSON.parse(user);
      return userData !== null && new Date(userData.expiresIn) > new Date();
    } catch (err) {
      return false;
    }
  };
  console.log("isUserLoggedIn: ", isUserLoggedIn());
  console.log("Test!: ", isUserLoggedIn === null ? true : false);

  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);

  const loginUserHandler = useCallback(
    (username = "zsherif308", password, expiresIn = 12) => {
      const expirationDate = AddMinutes(new Date(), expiresIn).toISOString();
      const userInfo = {
        username,
        token: "myToken",
        expiresIn: expirationDate,
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
    token: user && JSON.parse(user)?.token,
    expirationDate: user && JSON.parse(user)?.expiresIn,
  };
  console.log("State: ", isLoggedIn);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};
// const useAuth = () => {
//   return useContext(AuthContext);
// };
// export { useAuth, AuthProvider };
export default AuthContext;
