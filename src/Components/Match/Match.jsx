import React from "react";
import { useAuth } from "Contexts/Auth-Context";
import Progress from "Components/Progress/Progress";
import leagueLogo from "Assets/Images/EPL.png";

import {
  MatchCard,
  MatchHeader,
  MatchTeams,
  Team,
  Versus,
  MatchDetails,
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
} from "./Match.styled";

const handleMatchClick = (match, setSelectedMatch) => {
  console.log("Match clicked:", match);
  setSelectedMatch(match);
};

const Match = ({
  homeTeamId,
  awayTeamId,
  homeTeam,
  awayTeam,
  venue,
  date,
  time,
  mainReferee,
  linesmen,
  setSelectedMatch,
  setEditingMatch,
  logoOfHome,
  logoOfAway,
  matchId,
  setIsEditMode,
}) => {
  const auth = useAuth();
  const matchData = {
    homeTeam,
    awayTeam,
    venue,
    date,
    time,
    mainReferee,
    linesmen,
    logoOfHome,
    logoOfAway,
    homeTeamId,
    awayTeamId,
    matchId,
  };
  // if (matchData) console.log("matchData", matchData);

  if (!matchData) return <Progress>...Loading</Progress>;
  return (
    <MatchCard>
      <MatchHeader>
        <LeagueLogo src={leagueLogo} alt="Egyptian Premier League" />
        <span>Egyptian Premier League 2023</span>
        <span>
          {date} at {time}
        </span>
      </MatchHeader>
      <MatchTeams>
        <TeamContainer>
          <TeamLogo src={logoOfHome} alt={homeTeam} />
          <Team>{homeTeam}</Team>
        </TeamContainer>
        <Versus>vs</Versus>
        <TeamContainer>
          <TeamLogo src={logoOfAway} alt={awayTeam} />
          <Team>{awayTeam}</Team>
        </TeamContainer>
      </MatchTeams>

      <MatchDetails>
        <DetailItem>
          <IconContainer>
            <VenueIcon size={25} />
          </IconContainer>
          <DetailLabel>Venue:</DetailLabel>
          <DetailValue>{venue}</DetailValue>
        </DetailItem>
        <DetailItem>
          <IconContainer>
            <RefereeIcon size={25} />
          </IconContainer>
          <DetailLabel>Main Referee:</DetailLabel>
          <DetailValue>{mainReferee}</DetailValue>
        </DetailItem>
        <DetailItem>
          <IconContainer>
            <LinesmanIcon size={25} />
          </IconContainer>
          <DetailLabel>Linesmen:</DetailLabel>
          <DetailValue>{linesmen.join(", ")}</DetailValue>
        </DetailItem>
      </MatchDetails>
      {auth.role === "Manager" && (
        <EditButton
          onClick={() => {
            setEditingMatch(matchData);
            setIsEditMode(true);
          }}
        >
          Edit
        </EditButton>
      )}
      <ViewMatchDetailsButton onClick={() => handleMatchClick(matchData, setSelectedMatch)}>View Details</ViewMatchDetailsButton>
    </MatchCard>
  );
};

export default Match;
