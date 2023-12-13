import styled from "styled-components";
import greenGround from "Assets/Images/ground.jpg";

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
export const Ground = styled.div`
  background-image: url(${greenGround});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
  height: 200px;
  z-index: 1;
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
  position: relative;
`;

export const SeatSummary = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #e3f2fd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #0d47a1;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;

  span {
    background-color: #ffffff;
    border: 1px solid #0d47a1;
    border-radius: 5px;
    padding: 5px 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const ConfirmButton = styled.button`
  padding: 10px 15px;
  margin-top: 20px;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
