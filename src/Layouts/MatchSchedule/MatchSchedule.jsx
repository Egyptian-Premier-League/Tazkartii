import React from "react";
import Match from "Components/Match/Match";
import { ScheduleContainer ,Title} from "./MatchSchedule.styled";

const MatchSchedule = ({ matchData }) => {
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
        />
      ))}
    </ScheduleContainer>
  );
};

export default MatchSchedule;
