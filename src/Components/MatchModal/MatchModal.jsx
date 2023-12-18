import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Contexts/Auth-Context";

import {
  ModalContainer,
  ModalContent,
  CloseButton,
  ModalDetailItem,
  ModalDetailLabel,
  VenueModalIcon,
  ModalDetailValue,
  RefereeModalIcon,
  LinesmanModalIcon,
  DateIcon,
  TeamLogo,
  TeamName,
  TeamsContainer,
  Vs,
  ReserveButton,
} from "./MatchModal.styled";

const MatchModal = ({ match, onClose }) => {
  const navigate = useNavigate();
  const auth = useAuth();

  if (!match) return null;

  const handleReserveSeat = () => {
    navigate(`/reservation/match?id=${match.matchId}`);
  };

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Match Details</h2>
        <TeamsContainer>
          <TeamLogo src={match.logoOfHome} alt={match.homeTeam} />
          <TeamName>{match.homeTeam}</TeamName>
          <Vs> VS </Vs>
          <TeamLogo src={match.logoOfAway} alt={match.awayTeam} />
          <TeamName>{match.awayTeam}</TeamName>
        </TeamsContainer>

        <ModalDetailItem>
          <VenueModalIcon />
          <ModalDetailLabel>Venue:</ModalDetailLabel>
          <ModalDetailValue>{match.venue}</ModalDetailValue>
        </ModalDetailItem>

        <ModalDetailItem>
          <DateIcon />
          <ModalDetailLabel> Date:</ModalDetailLabel>
          <ModalDetailValue>
            {match.date} at {match.time}
          </ModalDetailValue>
        </ModalDetailItem>
        <ModalDetailItem>
          <RefereeModalIcon />
          <ModalDetailLabel>Main Referee:</ModalDetailLabel>
          <ModalDetailValue>{match.mainReferee}</ModalDetailValue>
        </ModalDetailItem>

        <ModalDetailItem>
          <LinesmanModalIcon />
          <ModalDetailLabel>Linesmen:</ModalDetailLabel>
          <ModalDetailValue>{match.linesmen.join(", ")}</ModalDetailValue>
        </ModalDetailItem>
        {auth.role !== "Admin" && (
          <ReserveButton onClick={handleReserveSeat}>{auth.role === "Manager" ? "View Seats" : "Reserve Seat"}</ReserveButton>
        )}
      </ModalContent>
    </ModalContainer>
  );
};

export default MatchModal;
