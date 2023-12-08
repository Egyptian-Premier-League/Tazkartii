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

  const handleStadiumCreate = () => {
    setIsOpen(false);
    navigate("/add-stadium");
  };

  const handleMatchCreate = () => {
    setIsOpen(false);
    navigate("/add-match");
  };

  const handleLogout = () => {
    setIsOpen(false);
    auth.logoutUser();
    navigate("/login");
  };

  const handleLogin = () => {
    setIsOpen(false);
    navigate("/login");
  };
  const handleSignup = () => {
    setIsOpen(false);
    navigate("/signup");
  };
  return (
    <>
      <Overlay $isOpen={isOpen} onClick={toggleDrawer} />
      <SidebarContainer $isOpen={isOpen}>
        <DrawerButton onClick={toggleDrawer} $isOpen={isOpen}>
          <IconWrapper>{isOpen ? <MdChevronLeftStyled size={30} /> : <MdChevronRightStyled size={30} />}</IconWrapper>
        </DrawerButton>
        <MenuList>
          {auth.isLoggedIn && auth.role === "Manager" && (
            <>
              <MenuItem onClick={handleStadiumCreate}>Create Stadium</MenuItem>
              <MenuItem onClick={handleMatchCreate}>Create Match</MenuItem>
            </>
          )}
          <MenuItem>About</MenuItem>
          {!auth.isLoggedIn && (
            <>
              {" "}
              <MenuItem onClick={handleLogin}>Login</MenuItem>
              <MenuItem onClick={handleSignup}>Signup</MenuItem>
            </>
          )}

          {auth.isLoggedIn && <MenuItem onClick={handleLogout}>Logout</MenuItem>}
        </MenuList>
      </SidebarContainer>
    </>
  );
};
export default Drawer;
