import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth-Context";

// protected route
const RequireAuth = ({ children }) => {
  const auth = useAuth();

  // if (!auth.isLoggedIn || new Date(auth.expirationDate()) < new Date()) {
  //   if (auth.isLoggedIn && auth.expirationDate() < new Date()) {
  //     console.log("Token expired");
  //     auth.logoutUser();
  //   }

  if (!auth.isLoggedIn) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default RequireAuth;
