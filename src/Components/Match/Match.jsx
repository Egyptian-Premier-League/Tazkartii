import React from "react";

import ahlyLogo from "Assets/Images/ahly.png";
import zamalekLogo from "Assets/Images/zamalek.png";
import wadiDeglaLogo from "Assets/Images/wadiDegla.png";
import moqawloonLogo from "Assets/Images/mokawlon.png";
import pyramidsLogo from "Assets/Images/pyramids.png";
import ceramica from "Assets/Images/ceramica.png";
import esmailyLogo from "Assets/Images/esmaily.png";
import futureLogo from "Assets/Images/future.png";
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
} from "./Match.styled";

const getTeamLogo = (teamName) => {
  const logos = {
    "Al Ahly": ahlyLogo,
    Zamalek: zamalekLogo,
    Pyramids: pyramidsLogo,
    "Wadi Degla": wadiDeglaLogo,
    "Ceramica Cleopatra": ceramica,
    "Al Esmaily": esmailyLogo,
    "Al Moqawloon Al Arab": moqawloonLogo,
    "Future FC": futureLogo,
  };
  return logos[teamName];
};
const handleMatchClick = (match, setSelectedMatch) => {
  console.log("Match clicked:", match);
  setSelectedMatch(match);
};

const Match = ({ homeTeam, awayTeam, venue, date, time, mainReferee, linesmen, setSelectedMatch }) => {
  const matchData = {
    homeTeam,
    awayTeam,
    venue,
    date,
    time,
    mainReferee,
    linesmen,
    logoOfHome: getTeamLogo(homeTeam),
    logoOfAway: getTeamLogo(awayTeam),
  };
  return (
    <MatchCard onClick={() => handleMatchClick(matchData, setSelectedMatch)}>
      <MatchHeader>
        <LeagueLogo src={leagueLogo} alt="Egyptian Premier League" />
        <span>Egyptian Premier League 2023</span>
        <span>
          {date} at {time}
        </span>
      </MatchHeader>
      <MatchTeams>
        <TeamContainer>
          <TeamLogo src={getTeamLogo(homeTeam)} alt={homeTeam} />
          <Team>{homeTeam}</Team>
        </TeamContainer>
        <Versus>vs</Versus>
        <TeamContainer>
          <TeamLogo src={getTeamLogo(awayTeam)} alt={awayTeam} />
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
    </MatchCard>
  );
};

export default Match;
