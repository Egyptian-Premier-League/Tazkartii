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
        <NavLinkHeader href="/">Home</NavLinkHeader>
        {auth.isLoggedIn && auth.role === "Admin" && <NavLinkHeader href="/admin">Dashboard</NavLinkHeader>}
        <NavLinkHeader href="/matches">Matches</NavLinkHeader>
        <NavLinkHeader href="/standings">Standings</NavLinkHeader>
        <NavLinkHeader href="/Tickets">Tickets</NavLinkHeader>
      </NavHeader>
      <AuthLinks $isNavOpen={isNavOpen}>
        {!auth.isLoggedIn && (
          <>
            <NavLinkHeader href="/login">Login</NavLinkHeader>
            <NavLinkHeader href="/signup">Signup</NavLinkHeader>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            <NavLinkHeader href="/profile">My Profile</NavLinkHeader>
            <NavLinkHeader href="/login" onClick={auth.logoutUser}>
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
