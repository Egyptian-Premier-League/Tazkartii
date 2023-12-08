import React, { useState } from "react";
import { TicketsContainer, TicketCard, TeamLogo, Details, TicketInfo, MatchDetails, CancelButton, StatusIndicator } from "./Tickets.styled";

import ahlyLogo from "Assets/Images/ahly.png";
import zamalekLogo from "Assets/Images/zamalek.png";
import wadiDeglaLogo from "Assets/Images/wadiDegla.png";
import moqawloonLogo from "Assets/Images/mokawlon.png";
import pyramidsLogo from "Assets/Images/pyramids.png";
import ceramica from "Assets/Images/ceramica.png";
import esmailyLogo from "Assets/Images/esmaily.png";
import futureLogo from "Assets/Images/future.png";

const mockTickets = [
  {
    id: 1,
    match: "Match 1",
    teams: "Ahly vs Zamalek",
    location: "Stadium A",
    date: "2023-12-25",
    status: "reserved",
    seat: "A1",
    price: "$30",
    logoTeamOne: ahlyLogo,
    logoTeamTwo: zamalekLogo,
  },
  {
    id: 2,
    match: "Match 2",
    teams: "Pyramids vs Future FC",
    location: "Stadium B",
    date: "2023-06-20",
    status: "canceled",
    seat: "B2",
    price: "$35",
    logoTeamOne: pyramidsLogo,
    logoTeamTwo: futureLogo,
  },
  {
    id: 3,
    match: "Match 3",
    date: "2023-07-25",
    status: "reserved",
    seat: "C3",
    price: "$20",
    logoTeamOne: wadiDeglaLogo,
    logoTeamTwo: moqawloonLogo,
    location: "Stadium C",
    teams: "Wadi Degla vs Moqawloon Al Arab",
  },
  {
    id: 4,
    match: "Match 4",
    date: "2023-08-30",
    status: "canceled",
    seat: "D4",
    price: "$25",
    logoTeamOne: ceramica,
    logoTeamTwo: esmailyLogo,
    location: "Stadium D",
    teams: "Ceramica Cleopatra vs Al Esmaily",
  },
  {
    id: 5,
    match: "Match 4",
    date: "2023-08-30",
    status: "canceled",
    seat: "D4",
    price: "$25",
    logoTeamOne: ceramica,
    logoTeamTwo: esmailyLogo,
    location: "Stadium D",
    teams: "Ceramica Cleopatra vs Al Esmaily",
  },
];

const Tickets = ({ tickets = mockTickets }) => {
  const [allTickets, setAllTickets] = useState(tickets);

  const cancelReservation = (ticketId) => {
    const updatedTickets = allTickets.map((ticket) => {
      if (ticket.id === ticketId) {
        const currentDate = new Date();
        const eventDate = new Date(ticket.date);
        const differenceInTime = eventDate.getTime() - currentDate.getTime();
        const differenceInDays = differenceInTime / (1000 * 3600 * 24);

        if (differenceInDays >= 3) {
          alert("Your reservation has been canceled successfully.");
          return { ...ticket, status: "canceled" };
        } else {
          alert("Cancellation is only allowed up to 3 days before the event.");
        }
      }
      return ticket;
    });

    setAllTickets(updatedTickets);
  };

  return (
    <TicketsContainer>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} $status={ticket.status}>
          <MatchDetails>
            {ticket.logoTeamOne && <TeamLogo src={ticket.logoTeamOne} alt={`${ticket.teams}`} />}
            {ticket.logoTeamTwo && <TeamLogo src={ticket.logoTeamTwo} alt={`${ticket.teams}`} />}
            <TicketInfo>
              <strong>Match:</strong> {ticket.match}
              <br />
              <strong>Teams:</strong> {ticket.teams}
            </TicketInfo>
          </MatchDetails>
          <Details>
            <TicketInfo>
              <strong>Date:</strong> {ticket.date}
            </TicketInfo>
            <TicketInfo>
              <strong>Seat:</strong> {ticket.seat}
            </TicketInfo>
            <TicketInfo>
              <strong>Price:</strong> {ticket.price}
            </TicketInfo>
          </Details>
          {ticket.status === "reserved" && <CancelButton onClick={() => cancelReservation(ticket.id)}>Cancel Reservation</CancelButton>}
          <StatusIndicator $status={ticket.status}>{ticket.status}</StatusIndicator>
        </TicketCard>
      ))}
    </TicketsContainer>
  );
};

export default Tickets;
