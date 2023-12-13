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

const selectedStyle = css`
  background-color: #ffc107;
  cursor: pointer;
  &:hover {
    background-color: lightyellow;
  }
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

  ${({ $status }) => {
    switch ($status) {
      case "vacant":
        return vacantStyle;
      case "selected":
        return selectedStyle;
      case "reserved":
        return reservedStyle;
      default:
        return null;
    }
  }}
`;
