import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAuth } from "Contexts/Auth-Context";
import { NavigationContainer, NavHeader, NavLinkHeader, AuthLinks, MobileIcon } from "./Navigation.styled.js";
import { MdMenu } from "react-icons/md";

const Navigation = ({ toggleColorMode }) => {
  const auth = useAuth();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleMode = () => {
    toggleColorMode();
  };

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (path) => {
    setIsNavOpen(false);
    navigate(path);
  };

  return (
    <NavigationContainer>
      <MobileIcon onClick={handleNavToggle}>
        <MdMenu size="24" />
      </MobileIcon>
      <NavHeader $isNavOpen={isNavOpen}>
        <NavLinkHeader to="/" onClick={() => handleLinkClick("/")}>
          Home
        </NavLinkHeader>
        {auth.isLoggedIn && auth.role === "Admin" && (
          <NavLinkHeader to="/admin" onClick={() => handleLinkClick("/admin")}>
            Dashboard
          </NavLinkHeader>
        )}
        <NavLinkHeader to="/matches" onClick={() => handleLinkClick("/matches")}>
          Matches
        </NavLinkHeader>
        <NavLinkHeader to="/standings" onClick={() => handleLinkClick("/standings")}>
          Standings
        </NavLinkHeader>
        {auth.role === "Fan" && auth.isApproved && (
          <NavLinkHeader to="/tickets" onClick={() => handleLinkClick("/tickets")}>
            Tickets
          </NavLinkHeader>
        )}
      </NavHeader>
      <AuthLinks $isNavOpen={isNavOpen}>
        {!auth.isLoggedIn && (
          <>
            <NavLinkHeader to="/login" onClick={() => handleLinkClick("/login")}>
              Login
            </NavLinkHeader>
            <NavLinkHeader to="/signup" onClick={() => handleLinkClick("/signup")}>
              Signup
            </NavLinkHeader>
          </>
        )}
        {auth.isLoggedIn && (
          <>
            {auth.role !== "Admin" && (
              <NavLinkHeader to="/profile" onClick={() => handleLinkClick("/profile")}>
                My Profile
              </NavLinkHeader>
            )}{" "}
            <NavLinkHeader
              to="/login"
              onClick={() => {
                auth.logoutUser();
                handleLinkClick("/login");
              }}
            >
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
