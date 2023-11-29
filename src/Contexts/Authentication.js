import { createContext, useContext } from "react";
import AddMinutes from "../Utils/AddMinutes";

import useLocalStorage from "./useLocalStorage";

/* Creating a context object. */
const AuthContext = createContext(null);

/**
 * The AuthProvider is a function that takes in a child component and returns a context provider that
 * has a value of an object with the following properties: user, login, logout, getToken,
 * getExpirationDate, isLoggedIn, getFullName.
 * @returns The AuthContext.Provider is being returned.
 */
const AuthProvider = ({ children }) => {
  // Local storage for user information
  const [user, setUser] = useLocalStorage("user", "null");

  /**
   * The login function takes a user object as an argument, and then sets the user state to the
   * stringified version of the user object.
   * @param user - The user object that is returned from the login function.
   */
  const login = async (user) => {
    // Calculate token's expiration date
    user.expiresIn = AddMinutes(new Date(), user.expiresIn / 60);
    setUser(JSON.stringify(user));
  };

  // Handle logout
  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  // Return user's username
  const getUserName = () => {
    return JSON.parse(user).username;
  };

  // Return user's token
  const getToken = () => {
    return JSON.parse(user).token;
  };

  // Return token's expiration date
  const getExpirationDate = () => {
    return JSON.parse(user).expiresIn;
  };

  // Is user logged in?
  const isLoggedIn = () => {
    return user !== "null";
  };
  return (
    <AuthContext.Provider
      value={{
        //user,
        login,
        logout,
        getToken,
        getUserName,
        getExpirationDate,
        isLoggedIn,
        //getFullName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

/**
 * It returns the value of the AuthContext object.
 * @returns The AuthContext object.
 */
const useAuth = () => {
  return useContext(AuthContext);
};

export { useAuth, AuthProvider };
