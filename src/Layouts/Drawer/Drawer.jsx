import React, { useState } from "react";
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

  return (
    <>
      <Overlay isOpen={isOpen} onClick={toggleDrawer} />
      <SidebarContainer isOpen={isOpen}>
        <DrawerButton onClick={toggleDrawer} isOpen={isOpen}>
        <IconWrapper>
          {isOpen ? <MdChevronLeftStyled size={30} /> : <MdChevronRightStyled size={30} />}</IconWrapper>
        </DrawerButton>
        <MenuList>
          <MenuItem onClick={handleStadiumCreate}>Create Stadium</MenuItem>
          <MenuItem onClick={handleMatchCreate}>Create Match</MenuItem>
        </MenuList>
      </SidebarContainer>
    </>
  );
};
export default Drawer;
