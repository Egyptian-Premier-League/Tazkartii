import styled from "styled-components";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const ErrorMsg = styled.p`
  color: red;
  margin: 10px 0;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const ProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const SignUpContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;
export const BoxContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 10px;
  margin: auto;
`;
