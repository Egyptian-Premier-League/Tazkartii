import styled from "styled-components";
import eplLogo from "Assets/Images/epl.jpg";

export const HomePageContainer = styled.div`
  height: 100vh;
  background: url(${eplLogo}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.background.primary};
`;
