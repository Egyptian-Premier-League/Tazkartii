import React from "react";
import { Container, NavHeader, NavLinkHeader } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <NavHeader>
        <NavLinkHeader href="/">Home</NavLinkHeader>
        <NavLinkHeader href="/matches">Matches</NavLinkHeader>
        <NavLinkHeader href="/standings">Standings</NavLinkHeader>
        <NavLinkHeader href="/tickets">Tickets</NavLinkHeader>
      </NavHeader>
    </Container>
  );
};

export default Header;
