import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #282c34;
  height: 4rem;
  width: 100%;
`;
export const NavigationItem = styled.a`
  color: #333;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    color: #666;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  @media screen and (max-width: 822px) {
    display: ${({ $isNavOpen }) => ($isNavOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: 4rem;
    left: 0;
    background-color: #282c34;
    padding: 1rem;
    z-index: 99;
  }
`;

export const NavLinkHeader = styled(Link)`
  color: ${({ theme }) => theme.color.primary};
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  &:hover {
    background-color: #414754;
    transition: background-color 0.3s;
  }
`;

export const AuthLinks = styled.div`
  display: flex;
  gap: 1rem;
  z-index: 9999;
  @media screen and (max-width:  822px) {
    display: ${({ $isNavOpen }) => ($isNavOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: absolute;
    top: ${({ isNavOpen }) => (isNavOpen ? "calc(4rem + 1rem)" : "4rem")};
    left: 0;
    background-color: #282c34;
    padding: 1rem;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  color: white;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
