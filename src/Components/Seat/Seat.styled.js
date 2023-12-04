import styled, { css } from "styled-components";

const vacantStyle = css`
  background-color: green;
  cursor: pointer;
  &:hover {
    background-color: lightgreen;
  }
`;

const reservedStyle = css`
  background-color: red;
  cursor: not-allowed;
`;

export const StyledSeat = styled.div`
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;

  ${({ $status }) => ($status === "vacant" ? vacantStyle : reservedStyle)}
`;
