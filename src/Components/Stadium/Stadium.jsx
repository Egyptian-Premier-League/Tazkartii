import React, { useState, useEffect } from "react";
import { useAuth } from "Contexts/Auth-Context";
import Seat from "Components/Seat/Seat";
import useFetchFunction from "Hooks/useFetchFunction";
import { getMatchDetails } from "Services/General/Match";
import reserveSeat from "Services/General/ReserveSeat";
import { useNavigate } from "react-router-dom";
import { StadiumContainer, Row, StageArea, SeatContainer, SeatSummary, ConfirmButton } from "./Stadium.styled";

const Stadium = () => {
  const navigate = useNavigate();
  const [stadiumData, error, isLoading, dataFetch] = useFetchFunction();
  const [matchData, errorMatch, isMatchLoading, dataFetchMatch] = useFetchFunction();
  const auth = useAuth();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [matchId, setMatchId] = useState(null);
  const [seats, setSeats] = useState([]);

  const handleSeatClick = (row, col) => {
    let newSeats = [...seats];
    let newSelectedSeats = [...selectedSeats];
    if (auth.role === "Manager") return;

    if (newSeats[row][col] === "vacant") {
      newSeats[row][col] = "selected";
      newSelectedSeats.push({ seatRow: row + 1, seatNumber: col + 1 });
    } else if (newSeats[row][col] === "selected") {
      newSeats[row][col] = "vacant";
      newSelectedSeats = newSelectedSeats.filter((seat) => seat.seatRow !== row + 1 || seat.seatNumber !== col + 1);
    }

    setSeats(newSeats);
    setSelectedSeats(newSelectedSeats);
  };

  const confirmSeats = () => {
    if (selectedSeats.length > 0) {
      reserveSeat(dataFetch, auth, { matchId: matchId, seats: selectedSeats });
    } else {
      alert("Please select at least one seat.");
    }
  };

  useEffect(() => {
    if (matchId) {
      getMatchDetails(dataFetchMatch, matchId);
    }
  }, [matchId]);

  useEffect(() => {
    if (errorMatch) {
      alert("Error fetching match details");
      navigate("/");
    } else if (matchData && matchData !== undefined) {
      // Initialize seats data
      const newSeats = Array.from({ length: matchData?.stadium?.rowsNumber }, () => Array(matchData?.stadium?.seatsNumber).fill("vacant"));

      // Mark reserved seats
      matchData?.seats?.forEach((seat) => {
        const rowIndex = seat.seatRow - 1; // adjust for zero-based indexing
        const colIndex = seat.seatNumber - 1;
        if (rowIndex < newSeats?.length && colIndex < newSeats[rowIndex]?.length) {
          newSeats[rowIndex][colIndex] = "reserved";
        }
      });

      setSeats(newSeats);
    }
  }, [matchData, errorMatch]);

  useEffect(() => {
    if (error) return;
    else if (stadiumData && stadiumData.length > 0) {
      alert(`Reservation is Done! ❤ in match with seats ${"A" + stadiumData[0]?.seatRow},${"B" + stadiumData[0]?.seatNumber} `);
      navigate("/payment");
    }
  }, [stadiumData, error]);

  // get match id from url
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const matchId = urlParams.get("id");
    setMatchId(Number(matchId));
  }, []);

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
      </SeatContainer>
      {auth.role === "Fan" && (
        <>
          <SeatSummary>
            Selected Seats:{" "}
            {selectedSeats.map((seat, index) => (
              <span key={index}>{`Row ${seat.seatRow}, Col ${seat.seatNumber}`}</span>
            ))}
          </SeatSummary>
          <ConfirmButton onClick={confirmSeats}>Confirm Seats</ConfirmButton>
        </>
      )}
    </StadiumContainer>
  );
};

export default Stadium;
