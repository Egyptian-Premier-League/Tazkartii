import styled from "styled-components";

export const StadiumContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background.primary};
  border-radius: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0;
`;
export const Pitch = styled.div`
  grid-column: 2;
  grid-row: 2 / span 1;
  background-color: #006400;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
`;

export const StageArea = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`;
export const SeatContainer = styled.div`
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 8px 0px 8px 8px rgba(0, 0, 0, 0.2);
`;
