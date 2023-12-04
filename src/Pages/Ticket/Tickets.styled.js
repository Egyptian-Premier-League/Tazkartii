import styled from "styled-components";

export const TicketsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TicketCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: center;
  gap: 15px;
  border: 1px solid ${({ $status }) => ($status === "reserved" ? "#4caf50" : "#f44336")};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  background-color: #fff;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const TeamLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-right: 10px;
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TicketInfo = styled.p`
  color: #333;
  margin: 0;
  font-size: 0.9rem;
  font-weight: bold;

  strong {
    font-weight: normal;
    color: #666;
  }
`;

export const MatchDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StatusIndicator = styled.span`
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${({ $status }) => ($status === "reserved" ? "#e8f5e9" : "#ffebee")};
  color: ${({ $status }) => ($status === "reserved" ? "#2e7d32" : "#d32f2f")};
  font-size: 0.8rem;
`;
