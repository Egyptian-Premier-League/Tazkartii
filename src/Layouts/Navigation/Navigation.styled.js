import styled from "styled-components";


export const NavigationContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #282c34;
  padding: 0 2rem;
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
`;

export const NavLinkHeader = styled.a`
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
`;
