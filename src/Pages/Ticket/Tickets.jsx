import React from "react";
import { TicketsContainer, TicketCard } from "./Tickets.styled";

const mockTickets = [
  { id: 1, match: "Match 1", date: "2023-05-15", status: "reserved" },
  { id: 2, match: "Match 2", date: "2023-06-20", status: "canceled" },
];

const Tickets = ({ tickets = mockTickets }) => {
  return (
    <TicketsContainer>
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} $status={ticket.status}>
          <h3>{ticket.match}</h3>
          <p>Date: {ticket.date}</p>
          <p>Status: {ticket.status}</p>
        </TicketCard>
      ))}
    </TicketsContainer>
  );
};

export default Tickets;
