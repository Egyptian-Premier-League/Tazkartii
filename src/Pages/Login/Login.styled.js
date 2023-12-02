import styled from "styled-components";
import Container from "@mui/material/Container";

const ContainerLogin = styled(Container)`
  /* background-color: ${({ theme }) => theme.background.primary}; */
  border-radius: 10px;
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

export { ErrorMsg, ProgressContainer, ContainerLogin };
