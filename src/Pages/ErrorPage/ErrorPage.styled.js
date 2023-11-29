import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorContainer = styled.div`
  text-align: center;
  padding: 50px;
`;

export const ErrorTitle = styled.h1`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const ErrorImage = styled.img`
  max-width: 60%;
  height: auto;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.p`
  color: #666;
  margin-bottom: 20px;
`;

export const HomeLink = styled(Link)`
  display: inline-block;

  background-color: ${({ theme }) => theme.background.hoverOfNav};
  color: ${({ theme }) => theme.color.primary};
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    color: #666;
  }
`;
