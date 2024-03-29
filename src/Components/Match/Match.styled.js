import styled from "styled-components";

import { MdStadium } from "react-icons/md";
import { GiWhistle } from "react-icons/gi";
import { FaFlagCheckered } from "react-icons/fa";

const MatchCard = styled.div`
  background: #eeeff1;
  border-radius: 8px;
  /* border: 8px solid #e0e0e0;  */
  cursor: pointer;
  padding: 15px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MatchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
`;

const MatchTeams = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  justify-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

const Versus = styled.span`
  font-size: 1.5rem;
  color: #d32f2f;
`;

const MatchDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  background: #fff;
  padding: 10px;
  border-radius: 8px;
`;
const DetailItem = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`;
const DetailLabel = styled.span`
  font-weight: 500;
  color: #555;
  margin-right: 5px;
`;

const DetailValue = styled.span`
  font-weight: bold;
  color: #222;
`;

const Team = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.color.clubName};
`;
const LeagueLogo = styled.img`
  height: 80px;
  width: auto;
  margin-right: 10px;
`;

const TeamLogo = styled.img`
  height: 50px;
  width: auto;
  margin-right: 5px;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
`;
const IconContainer = styled.span`
  margin-right: 5px;
  display: flex;
  align-items: center;
`;
const VenueIcon = styled(MdStadium)`
  color: #4caf50;
`;

const RefereeIcon = styled(GiWhistle)`
  color: #f44336;
`;

const LinesmanIcon = styled(FaFlagCheckered)`
  color: #2196f3;
`;

const EditButton = styled.button`
  padding: 8px 16px;
  margin: 15px 5px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #d32f2f;
  }

  &:active {
    transform: translateY(2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.5);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
const ViewMatchDetailsButton = styled.button`
  padding: 8px 16px;
  margin: 15px 5px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s, transform 0.2s;
  &:hover {
    background-color: #0d47a1;
  }
`;
export {
  MatchCard,
  MatchHeader,
  MatchTeams,
  Versus,
  MatchDetails,
  Team,
  DetailItem,
  DetailLabel,
  DetailValue,
  LeagueLogo,
  TeamLogo,
  TeamContainer,
  IconContainer,
  VenueIcon,
  RefereeIcon,
  LinesmanIcon,
  EditButton,
  ViewMatchDetailsButton,
};
