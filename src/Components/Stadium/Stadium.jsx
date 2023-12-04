import React, { useState } from "react";
import Seat from "Components/Seat/Seat";
import { StadiumContainer, Row, StageArea, SeatContainer, Pitch } from "./Stadium.styled";

const Stadium = ({ rows, cols }) => {
  // Initialize stadium seats as a 2D array
  const [seats, setSeats] = useState(Array.from({ length: rows }, () => Array(cols).fill("vacant")));

  const handleSeatClick = (row, col) => {
    // Logic to handle seat click (e.g., reserve a seat)
    const newSeats = seats.map((r, rowIndex) =>
      r.map((seat, colIndex) => {
        if (rowIndex === row && colIndex === col && seat === "vacant") {
          return "reserved";
        }
        return seat;
      })
    );
    setSeats(newSeats);
  };

  return (
    <StadiumContainer>
      <StageArea>STAGE</StageArea>
      <SeatContainer>
        {seats.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((seat, colIndex) => (
              <Seat key={`${rowIndex}-${colIndex}`} status={seat} onClick={() => handleSeatClick(rowIndex, colIndex)} />
            ))}
          </Row>
        ))}
        <Pitch>PITCH</Pitch>
      </SeatContainer>
    </StadiumContainer>
  );
};

export default Stadium;
