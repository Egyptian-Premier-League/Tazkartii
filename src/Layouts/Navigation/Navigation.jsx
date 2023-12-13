import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useAuth } from "Contexts/Auth-Context";
import { NavigationContainer, NavHeader, NavLinkHeader, AuthLinks, MobileIcon } from "./Navigation.styled.js";
import { MdMenu } from "react-icons/md";

const Navigation = ({ toggleColorMode }) => {
  const auth = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleMode = () => {
    toggleColorMode();
  };
  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavigationContainer>
      <MobileIcon onClick={handleNavToggle}>
        <MdMenu size="24" />
      </MobileIcon>
      <NavHeader $isNavOpen={isNavOpen}>
        <NavLinkHeader to="/">Home</NavLinkHeader>
        {auth.isLoggedIn && auth.role === "Admin" && <NavLinkHeader to="/admin">Dashboard</NavLinkHeader>}
        <NavLinkHeader to="/matches">Matches</NavLinkHeader>
        <NavLinkHeader to="/standings">Standings</NavLinkHeader>
        {auth.role !== "Admin" && <NavLinkHeader to="/tickets">Tickets</NavLinkHeader>}
      </NavHeader>
      <AuthLinks $isNavOpen={isNavOpen}>
        {!auth.isLoggedIn && (
          <>
            <NavLinkHeader to="/login">Login</NavLinkHeader>
            <NavLinkHeader to="/signup">Signup</NavLinkHeader>
          </>
        )}
        {auth.isLoggedIn && (
          <>
{          auth.role !== "Admin" &&   <NavLinkHeader to="/profile">My Profile</NavLinkHeader>
}            <NavLinkHeader to="/login" onClick={auth.logoutUser}>
              Logout
            </NavLinkHeader>
          </>
        )}
        <Button variant="contained" onClick={handleToggleMode}>
          Toggle Theme
        </Button>
      </AuthLinks>
    </NavigationContainer>
  );
};

export default Navigation;
