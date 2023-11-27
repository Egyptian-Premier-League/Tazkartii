import React, { useContext } from "react";
import Button from "@mui/material/Button";

import AuthContext from "Contexts/Auth-Context";

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

  const auth = useContext(AuthContext);
  return (
    <NavigationContainer>
      <NavHeader>
        <NavLinkHeader href="/">Home</NavLinkHeader>
        <NavLinkHeader href="/matches">Matches</NavLinkHeader>
        <NavLinkHeader href="/standings">Standings</NavLinkHeader>
        <NavLinkHeader href="/tickets">Tickets</NavLinkHeader>
      </NavHeader>
      {!auth.isLoggedIn && (
        <AuthLinks>
          <NavLinkHeader href="/login">Login</NavLinkHeader>
          <NavLinkHeader href="/signup">Signup</NavLinkHeader>
        </AuthLinks>
      )}
      {auth.isLoggedIn && (
        <AuthLinks>
          <NavLinkHeader href="/login" onClick={() => auth.setLoggedOut}>
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
