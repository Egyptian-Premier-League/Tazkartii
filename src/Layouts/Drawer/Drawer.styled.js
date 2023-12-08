import styled from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? "0" : "-250px")};
  width: 250px;
  height: 100%;
  background-color: #282c34;
  transition: left 0.3s ease;
  z-index: 1500;
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 20px;
`;

export const MenuItem = styled.li`
  padding: 10px;
  margin: 10px 0;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DrawerButton = styled.button`
  position: absolute;
  top: 20px;
  right: ${({ $isOpen }) => ($isOpen ? "-40px" : "-25px")};
  width: 35px;
  height: 35px;
  background-color: #282c34;
  color: white;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1400;
`;
export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  /* height: 100%; */
`;

export const MdChevronRightStyled = styled(MdChevronRight)`
  color: ${({ theme }) => theme.color.primary};
  /* width: 24px;
  height: 24px; */
`;

export const MdChevronLeftStyled = styled(MdChevronLeft)`
  color: ${({ theme }) => theme.color.primary};
  /* width: 24px;
  height: 24px; */
`;
