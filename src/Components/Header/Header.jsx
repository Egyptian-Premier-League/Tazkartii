import React from "react";
import {
  Container,
  NavHeader,
  NavLinkHeader,
  AuthLinks,
} from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <NavHeader>
        <NavLinkHeader to="/">Home</NavLinkHeader>
        <NavLinkHeader to="/matches">Matches</NavLinkHeader>
        <NavLinkHeader to="/standings">Standings</NavLinkHeader>
        <NavLinkHeader to="/tickets">Tickets</NavLinkHeader>
      </NavHeader>
      <AuthLinks>
        <NavLinkHeader to="/login">Login</NavLinkHeader>
        <NavLinkHeader to="/signup">Signup</NavLinkHeader>
      </AuthLinks>
    </Container>
  );
};

export default Header;
