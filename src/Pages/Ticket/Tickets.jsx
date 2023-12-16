import React, { useState, useEffect } from "react";
import { getReservations, cancelReservation } from "Services/Users/Reservation";
import { formatDateAndTime } from "Utils/FormatDate";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Contexts/Auth-Context";
import Progress from "Components/Progress/Progress";
import { TicketsContainer, TicketCard, TeamLogo, Details, TicketInfo, MatchDetails, CancelButton, StatusIndicator } from "./Tickets.styled";

const Tickets = () => {
  const auth = useAuth();
  const [ticketsData, errorTickets, isLoadingTicket, dataFetch] = useFetchFunction();
  const [cancelReservationData, errorCancelReservation, isLoadingCancelReservation, cancelReservationDataFetch] = useFetchFunction();
  const [allTickets, setAllTickets] = useState([]);

  useEffect(() => {
    getReservations(dataFetch, auth);
  }, []);

  useEffect(() => {
    if (errorTickets) {
      console.error("Error fetching tickets:", errorTickets);
      return;
    }
    if (ticketsData && ticketsData.length > 0) {
      console.log("ticketsData", ticketsData[0]);
      setAllTickets(ticketsData);
    }
  }, [ticketsData, errorTickets]);

  const handleCancelReservation = (ticketId) => {
    cancelReservation(cancelReservationDataFetch, ticketId, auth);

    const updatedTickets = allTickets.map((ticket) => (ticket.id === ticketId ? { ...ticket, status: "canceled" } : ticket));
    setAllTickets(updatedTickets);
  };

  useEffect(() => {
    if (errorCancelReservation && !isLoadingCancelReservation) {
      alert("You can't cancel reservation before 3 days of the match");
    } else if (cancelReservationData.message) {
      getReservations(dataFetch, auth);

      alert("Reservation canceled successfully.");
    }
  }, [cancelReservationData, errorCancelReservation, isLoadingCancelReservation]);

  return (
    <TicketsContainer>
      {isLoadingTicket ? (
        <Progress>Loading tickets...</Progress>
      ) : allTickets !== undefined && allTickets.length > 0 ? (
        allTickets.map((ticket, index) => (
          <TicketCard key={ticket?.id} $status={"reserved"}>
            <MatchDetails>
              {ticket?.match?.homeTeam?.photoUrl && (
                <TeamLogo src={ticket?.match?.homeTeam?.photoUrl} alt={`${ticket?.match?.homeTeam?.name}`} />
              )}
              {ticket?.match?.awayTeam?.photoUrl && (
                <TeamLogo src={ticket?.match?.awayTeam?.photoUrl} alt={`${ticket?.match?.awayTeam?.name}`} />
              )}
              <TicketInfo>
                <strong>Match:</strong> {index + 1}
                <br />
                <strong>Teams:</strong> {ticket?.match?.homeTeam?.name} vs {ticket?.match?.awayTeam?.name}
              </TicketInfo>
            </MatchDetails>
            <Details>
              <TicketInfo>
                <strong>Date:</strong> {formatDateAndTime(ticket?.match?.date)[0]} at {formatDateAndTime(ticket?.match?.date)[1]}
              </TicketInfo>
              <TicketInfo>
                <strong>Seat:</strong> {ticket?.seatNumber}
              </TicketInfo>
              <TicketInfo>
                <strong>Price:</strong> 10EGP
              </TicketInfo>
            </Details>
            {"reserved" && <CancelButton onClick={() => handleCancelReservation(ticket?.id)}>Cancel Reservation</CancelButton>}
            <StatusIndicator $status={"reserved"}>{"reserved"}</StatusIndicator>
          </TicketCard>
        ))
      ) : (
        <p>No tickets available.</p>
      )}
    </TicketsContainer>
  );
};

export default Tickets;
