import React from "react";
import Button from "@mui/material/Button";

import {
  NavigationContainer,
  NavHeader,
  NavLinkHeader,
  AuthLinks,
} from "./Navigation.styled.js";

const Navigation = ({ toggleColorMode }) => {
  const handleToggleMode = () => {
    toggleColorMode();
  };
  return (
    <NavigationContainer>
      <NavHeader>
        <NavLinkHeader href="/">Home</NavLinkHeader>
        <NavLinkHeader href="/matches">Matches</NavLinkHeader>
        <NavLinkHeader href="/standings">Standings</NavLinkHeader>
        <NavLinkHeader href="/tickets">Tickets</NavLinkHeader>
      </NavHeader>
      <AuthLinks>
        <NavLinkHeader href="/login">Login</NavLinkHeader>
        <NavLinkHeader href="/signup">Signup</NavLinkHeader>
      </AuthLinks>
      <Button variant="contained" onClick={handleToggleMode}>
        Toggle Theme
      </Button>
    </NavigationContainer>
  );
};

export default Navigation;
