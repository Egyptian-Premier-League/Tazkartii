import styled from "styled-components";

export const TicketsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 120px;
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

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    text-align: center;
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

  @media screen and (max-width: 768px) {
    order: 3;
  }
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
  min-width: 200px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StatusIndicator = styled.span`
  padding: 2px 6px;
  border-radius: 4px;
  background-color: ${({ $status }) => ($status === "reserved" ? "#e8f5e9" : "#ffebee")};
  color: ${({ $status }) => ($status === "reserved" ? "#2e7d32" : "#d32f2f")};
  font-size: 0.8rem;
  @media screen and (max-width: 768px) {
    order: 2;
  }
`;

export const CancelButton = styled.button`
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #f44336;
  background-color: transparent;
  color: #f44336;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #f44336;
    color: white;
  }

  &:disabled {
    border-color: #ccc;
    color: #ccc;
    cursor: not-allowed;
  }
  @media screen and (max-width: 768px) {
    order: 1;
    width: 100%;
  }
`;
