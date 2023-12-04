import styled from "styled-components";

export const TicketsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TicketCard = styled.div`
  border: 1px solid ${({ $status }) => ($status === "reserved" ? "green" : "red")};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h3 {
    color: ${({ $status }) => ($status === "reserved" ? "green" : "red")};
  }

  p {
    color: #333;
  }
`;
