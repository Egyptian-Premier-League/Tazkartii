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
        <NavLinkHeader href="/">Home</NavLinkHeader>
        <NavLinkHeader href="/matches">Matches</NavLinkHeader>
        <NavLinkHeader href="/standings">Standings</NavLinkHeader>
        <NavLinkHeader href="/tickets">Tickets</NavLinkHeader>
      </NavHeader>
      <AuthLinks>
        <NavLinkHeader href="/login">Login</NavLinkHeader>
        <NavLinkHeader href="/signup">Signup</NavLinkHeader>
      </AuthLinks>
    </Container>
  );
};

export default Header;
