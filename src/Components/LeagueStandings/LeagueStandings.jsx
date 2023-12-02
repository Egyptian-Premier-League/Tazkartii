import React from "react";
import ahlyLogo from "Assets/Images/ahly.png";
import zamalekLogo from "Assets/Images/zamalek.png";
import wadiDeglaLogo from "Assets/Images/wadiDegla.png";
import moqawloonLogo from "Assets/Images/mokawlon.png";
import pyramidsLogo from "Assets/Images/pyramids.png";
import ceramica from "Assets/Images/ceramica.png";
import esmailyLogo from "Assets/Images/esmaily.png";
import futureLogo from "Assets/Images/future.png";
import nbeLogo from "Assets/Images/nbe.png";
import {
  StandingsContainer,
  Table,
  Th,
  Td,
  StandingRow,
  WinnerIcon,
  LoserIcon,
  DrawIcon,
  LastMatchesContainer,
  TeamLogo,
  TeamContainer,
  HeaderContainer,
} from "./LeagueStandings.styled";
const LeagueStandings = () => {
  const teams = [
    {
      name: "Al Ahly",
      played: 10,
      win: 6,
      draw: 2,
      loss: 2,
      goalsFor: 20,
      goalsAgainst: 10,
      points: 20,
      last5: ["W", "W", "L", "W", "D"],
    },
    {
      name: "Zamalek",
      played: 10,
      win: 5,
      draw: 1,
      loss: 3,
      goalsFor: 17,
      goalsAgainst: 16,
      points: 18,
      last5: ["W", "D", "D", "W", "L"],
    },
    {
      name: "Pyramids",
      played: 10,
      win: 4,
      draw: 3,
      loss: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      points: 15,
      last5: ["L", "W", "D", "W", "D"],
    },
    {
      name: "Future FC",
      played: 10,
      win: 4,
      draw: 3,
      loss: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      points: 15,
      last5: ["L", "W", "D", "W", "D"],
    },
    {
      name: "Ceramica Cleopatra",
      played: 10,
      win: 4,
      draw: 3,
      loss: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      points: 15,
      last5: ["L", "W", "D", "W", "D"],
    },
    {
      name: "Al Moqawloon Al Arab",
      played: 10,
      win: 4,
      draw: 3,
      loss: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      points: 15,
      last5: ["L", "W", "D", "W", "D"],
    },
    {
      name: "Al Esmaily",
      played: 10,
      win: 4,
      draw: 3,
      loss: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      points: 15,
      last5: ["L", "W", "D", "W", "D"],
    },
    {
      name: "Wadi Degla",
      played: 10,
      win: 4,
      draw: 3,
      loss: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      points: 15,
      last5: ["L", "W", "D", "W", "D"],
    },
    {
      name: "Al Ahly Bank",
      played: 10,
      win: 4,
      draw: 3,
      loss: 3,
      goalsFor: 15,
      goalsAgainst: 12,
      points: 15,
      last5: ["L", "W", "D", "W", "D"],
    },
  ];

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
      "Al Ahly Bank": nbeLogo,
    };
    return logos[teamName];
  };

  const renderLastFive = (results) => {
    return (
      <LastMatchesContainer>
        {results.map((result, index) => {
          if (result === "W") return <WinnerIcon size={25} key={index} />;
          if (result === "D") return <DrawIcon size={25} key={index} />;
          if (result === "L") return <LoserIcon size={25} key={index} />;
          return null;
        })}
      </LastMatchesContainer>
    );
  };

  return (
    <StandingsContainer>
      <HeaderContainer>Egyptian Premier League Standings</HeaderContainer>
      <Table>
        <thead>
          <tr>
            <Th>Rank</Th>
            <Th>Team</Th>
            <Th>Played</Th>
            <Th>Win</Th>
            <Th>Draw</Th>
            <Th>Loss</Th>
            <Th>GF</Th>
            <Th>GA</Th>
            <Th>GD</Th>
            <Th>Points</Th>
            <Th>Last 5 Matches</Th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <StandingRow key={index}>
              <Td>{index + 1}</Td>
              <Td>
                <TeamContainer>
                  <TeamLogo src={getTeamLogo(team.name)} alt={team.name} />
                  {team.name}
                </TeamContainer>
              </Td>
              <Td>{team.played}</Td>

              <Td>{team.win}</Td>
              <Td>{team.draw}</Td>
              <Td>{team.loss}</Td>
              <Td>{team.goalsFor}</Td>
              <Td>{team.goalsAgainst}</Td>
              <Td>{team.goalsFor - team.goalsAgainst}</Td>
              <Td>{team.points}</Td>

              <Td>{renderLastFive(team.last5)}</Td>
            </StandingRow>
          ))}
        </tbody>
      </Table>
    </StandingsContainer>
  );
};

export default LeagueStandings;
