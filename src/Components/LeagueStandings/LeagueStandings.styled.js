import styled from "styled-components";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { PiCheckCircle } from "react-icons/pi";
import { AiOutlineMinusCircle } from "react-icons/ai";

const StandingsContainer = styled.div`
  padding: 20px;
  max-width: 1000px;
  width: 100%;
  margin: auto;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const HeaderContainer = styled.h1`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #004d99;
  color: white;
  padding: 10px;
  text-align: center;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  vertical-align: middle;
`;

const StandingRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const LastMatchesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const WinnerIcon = styled(PiCheckCircle)`
  fill: green;
`;
const LoserIcon = styled(IoIosCloseCircleOutline)`
  fill: red;
`;
const DrawIcon = styled(AiOutlineMinusCircle)`
  color: yellow;
  fill: gray;
`;
const TeamLogo = styled.img`
  height: 30px;
  width: auto;
  margin-right: 5px;
  vertical-align: middle;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export {
  StandingsContainer,
  HeaderContainer,
  Table,
  Th,
  Td,
  StandingRow,
  LastMatchesContainer,
  WinnerIcon,
  LoserIcon,
  DrawIcon,
  TeamLogo,
  TeamContainer,
};