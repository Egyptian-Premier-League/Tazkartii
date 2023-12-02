import React from "react";
import Button from "@mui/material/Button";

import { useAuth } from "Contexts/Auth-Context";

import { NavigationContainer, NavHeader, NavLinkHeader, AuthLinks } from "./Navigation.styled.js";

const Navigation = ({ toggleColorMode }) => {
  const handleToggleMode = () => {
    toggleColorMode();
  };

  const auth = useAuth();
  return (
    <NavigationContainer>
      <NavHeader>
        <NavLinkHeader href="/">Home</NavLinkHeader>
        {auth.isLoggedIn && auth.role === "Admin" && <NavLinkHeader href="/admin">Dashboard</NavLinkHeader>}
        <NavLinkHeader href="/matches">Matches</NavLinkHeader>
        <NavLinkHeader href="/standings">Standings</NavLinkHeader>
        <NavLinkHeader href="/Tickets">Tickets</NavLinkHeader>
      </NavHeader>
      {!auth.isLoggedIn && (
        <AuthLinks>
          <NavLinkHeader href="/login">Login</NavLinkHeader>
          <NavLinkHeader href="/signup">Signup</NavLinkHeader>
        </AuthLinks>
      )}
      {auth.isLoggedIn && (
        <AuthLinks>
          <NavLinkHeader href="/profile">My Profile</NavLinkHeader>
          <NavLinkHeader href="/login" onClick={auth.logoutUser}>
            Logout
          </NavLinkHeader>
        </AuthLinks>
      )}
      <Button variant="contained" onClick={handleToggleMode}>
        Toggle Theme
      </Button>
    </NavigationContainer>
  );
};

export default Navigation;
