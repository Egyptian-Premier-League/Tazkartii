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
  
  // if route tickets and user is  admin , but write in url tickets .. redirect to admin
  if (auth.isLoggedIn && auth.role === "Admin" && window.location.pathname === "/tickets") {
    return <Navigate to="/admin"></Navigate>;
  }

  if (!auth.isLoggedIn) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default RequireAuth;
