import React, { useState } from "react";
import Match from "Components/Match/Match";
import MatchModal from "Components/MatchModal/MatchModal";
import { ScheduleContainer, Title } from "./MatchSchedule.styled";

const matchData = [
  {
    id: 1,
    homeTeam: "Al Ahly",
    awayTeam: "Zamalek",
    venue: "Education City Stadium, Al Rayyan, Doha",
    date: "Today",
    time: "21:00",
    mainReferee: "Fahem Omar",
    linesmen: ["Linesman One", "Linesman Two"],
  },
  {
    id: 2,
    homeTeam: "Pyramids",
    awayTeam: "Ceramica Cleopatra",
    venue: "Cairo Stadium",
    date: "Today",
    time: "19:00",
    mainReferee: "Referee Name",
    linesmen: ["Linesman One", "Linesman Two"],
  },
  {
    id: 3,
    homeTeam: "Future FC",
    awayTeam: "Al Esmaily",
    venue: "Borg El Arab",
    date: "Tomorrow",
    time: "22:00",
    mainReferee: "Samir Osman",
    linesmen: ["Linesman One", "Linesman Two"],
  },
];
const MatchSchedule = () => {
  const [selectedMatch, setSelectedMatch] = useState(null);

  const handleCloseModal = () => {
    setSelectedMatch(null);
  };

  return (
    <ScheduleContainer>
      <Title>Football Schedule Fixtures</Title>
      {matchData.map((match) => (
        <Match
          key={match.id}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          venue={match.venue}
          date={match.date}
          time={match.time}
          mainReferee={match.mainReferee}
          linesmen={match.linesmen}
          setSelectedMatch={setSelectedMatch}
        />
      ))}
      <MatchModal match={selectedMatch} onClose={handleCloseModal} />
    </ScheduleContainer>
  );
};

export default MatchSchedule;
