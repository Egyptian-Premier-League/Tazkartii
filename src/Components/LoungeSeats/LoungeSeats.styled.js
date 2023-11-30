import styled from "styled-components";

export const SeatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ScreensContainer = styled.div`
  margin-top: 30px;
  background-color: black;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScreenHeading = styled.h3`
  color: red;
`;

export const SeatPrice = styled.h5`
  margin-top: 20px;
`;

export const SeatPickerContainer = styled.div`
  /* Styles for SeatPicker can go here */
`;

export const SeatDetailsContainer = styled.div`
  display: flex;
  background-color: rgb(83, 199, 235);
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const SeatSelection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SelectedSeats = styled.h1`
  font-size: 20px;
  margin-left: 20px;
`;

export const TotalPrice = styled.h1`
  font-size: 20px;
  margin-left: 50%;
`;

export const ContinueButton = styled.button`
  background-color: rgb(9, 41, 51);
  margin-top: 20px;
  border-radius: 3px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  color: forestgreen;
`;
