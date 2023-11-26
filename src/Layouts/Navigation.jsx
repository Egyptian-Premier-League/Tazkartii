import React from "react";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";
import { NavigationContainer, NavigationItem } from "./Navigation.styled.js";

const Navigation = ({ toggleColorMode }) => {
  const handleToggleMode = () => {
    toggleColorMode();
  };
  return (
    <NavigationContainer>
      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li> */}
        <Button variant="contained" onClick={handleToggleMode}>
          Toggle Theme
        </Button>
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
