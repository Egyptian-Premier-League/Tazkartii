import React from "react";
import { StyledSeat } from "./Seat.styled";

const Seat = ({ status, onClick }) => {
  return <StyledSeat $status={status} onClick={onClick} />;
};

export default Seat;
