import styled from "styled-components";
import { MdStadium } from "react-icons/md";
import { GiWhistle } from "react-icons/gi";
import { FaFlagCheckered } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.3s;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ModalDetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ModalDetailLabel = styled.span`
  font-weight: 500;
  color: #555;
  margin-left: 10px;
  margin-right: 5px;
`;

export const ModalDetailValue = styled.span`
  font-weight: bold;
  color: #222;
`;
export const TeamLogo = styled.img`
  height: 50px;
  width: auto;
  margin-right: 10px;
  vertical-align: middle; // Aligns logo with the team name
`;

export const TeamName = styled.span`
  vertical-align: middle;
`;
export const TeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
  gap: 20px;
`;
export const Vs = styled.span`
  font-size: 1.5rem;
  color: #d32f2f;
`;

// Icon styles
export const VenueModalIcon = styled(MdStadium)`
  color: #4caf50;
  font-size: 25px;
`;

export const RefereeModalIcon = styled(GiWhistle)`
  color: #f44336;
  font-size: 25px;
`;

export const LinesmanModalIcon = styled(FaFlagCheckered)`
  color: #2196f3;
  font-size: 25px;
`;
export const DateIcon = styled(CiClock1)`
  color: #219590;
  font-size: 25px;
`;

export const CloseButton = styled.button`
  background: #f44336;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  padding: 0 10px;
  line-height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const ReserveButton = styled.button`
  padding: 10px 15px;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
