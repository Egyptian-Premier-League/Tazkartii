import styled, { css } from "styled-components";
import { MdChair } from "react-icons/md";

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

export const StyledSeat = styled(MdChair)`
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
