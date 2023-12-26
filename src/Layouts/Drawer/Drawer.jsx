import React, { useState } from "react";
import { useAuth } from "Contexts/Auth-Context";
import {
  SidebarContainer,
  MenuList,
  MenuItem,
  DrawerButton,
  Overlay,
  MdChevronRightStyled,
  MdChevronLeftStyled,
  IconWrapper,
} from "./Drawer.styled";
import { useNavigate } from "react-router-dom";

const Drawer = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      <Overlay $isOpen={isOpen} onClick={toggleDrawer} />
      <SidebarContainer $isOpen={isOpen}>
        <DrawerButton onClick={toggleDrawer} $isOpen={isOpen}>
          <IconWrapper>{isOpen ? <MdChevronLeftStyled size={30} /> : <MdChevronRightStyled size={30} />}</IconWrapper>
        </DrawerButton>
        <MenuList>
          <MenuItem onClick={() => handleNavigation("/")}>Home</MenuItem>
          {auth.isLoggedIn && auth.role === "Admin" && (
            <>
              <MenuItem onClick={() => handleNavigation("/admin")}>Dashboard</MenuItem>
            </>
          )}

          {auth.isLoggedIn && auth.role === "Manager" && (
            <>
              <MenuItem onClick={() => handleNavigation("/add-stadium")}>Create Stadium</MenuItem>
              <MenuItem onClick={() => handleNavigation("/add-match")}>Create Match</MenuItem>
            </>
          )}
          <MenuItem onClick={() => handleNavigation("/matches")}>Matches</MenuItem>
          <MenuItem onClick={() => handleNavigation("/standings")}>Standings</MenuItem>
          {!auth.isLoggedIn && (
            <>
              <MenuItem onClick={() => handleNavigation("/login")}>Login</MenuItem>
              <MenuItem onClick={() => handleNavigation("/signup")}>Signup</MenuItem>
            </>
          )}

          {auth.isLoggedIn && <MenuItem onClick={() => handleNavigation("/login", auth.logoutUser())}>Logout</MenuItem>}
        </MenuList>
      </SidebarContainer>
    </>
  );
};
export default Drawer;
