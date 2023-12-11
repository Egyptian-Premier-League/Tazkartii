import React, { useState } from "react";
import Seat from "Components/Seat/Seat";
import { useNavigate } from "react-router-dom";
import { StadiumContainer, Row, StageArea, SeatContainer, Pitch, SeatSummary, ConfirmButton } from "./Stadium.styled";

const Stadium = ({ rows, cols, onSeatsConfirmed }) => {
  const navigate = useNavigate();
  const [seats, setSeats] = useState(Array.from({ length: rows }, () => Array(cols).fill("vacant")));
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, col) => {
    let newSeats = [...seats];
    let newSelectedSeats = [...selectedSeats];

    if (newSeats[row][col] === "vacant") {
      newSeats[row][col] = "selected";
      newSelectedSeats.push({ row, col });
    } else if (newSeats[row][col] === "selected") {
      newSeats[row][col] = "vacant";
      newSelectedSeats = newSelectedSeats.filter((seat) => seat.row !== row || seat.col !== col);
    }

    setSeats(newSeats);
    setSelectedSeats(newSelectedSeats);
  };

  const confirmSeats = () => {
    if (selectedSeats.length > 0) {
      navigate("/payment");
      console.log("selectedSeats", selectedSeats);
    } else {
      alert("Please select at least one seat.");
    }
  };

  return (
    <StadiumContainer>
      <StageArea>STAGE</StageArea>
      <SeatContainer>
        {seats.map((row, rowIndex) => (
          <Row key={rowIndex}>
            {row.map((seatStatus, colIndex) => (
              <Seat key={`${rowIndex}-${colIndex}`} status={seatStatus} onClick={() => handleSeatClick(rowIndex, colIndex)} />
            ))}
          </Row>
        ))}
        <Pitch>PITCH</Pitch>
      </SeatContainer>
      <SeatSummary>
        Selected Seats:{" "}
        {selectedSeats.map((seat, index) => (
          <span key={index}>{`Row ${seat.row + 1}, Col ${seat.col + 1}`}</span>
        ))}
      </SeatSummary>
      <ConfirmButton onClick={confirmSeats}>Confirm Seats</ConfirmButton>
    </StadiumContainer>
  );
};

export default Stadium;