import styled from "styled-components";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import EPFLLogo from "Assets/Images/Egyptian_Premier_League.png";

const ContainerLogin = styled(Container)`
  /* background-color: ${({ theme }) => theme.background.primary}; */
  border-radius: 10px;
  border-color: ${({ theme }) => theme.borderColor.primary};
  margin: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 1.2rem;
`;
const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 10px;
`;
const BackgroundContainer = styled.div`
  flex: 1;
  background-image: url(${EPFLLogo});
  background-repeat: no-repeat;
  background-position: center left;
  background-size: contain;
`;

export { ErrorMsg, ProgressContainer, ContainerLogin, BackgroundContainer };
