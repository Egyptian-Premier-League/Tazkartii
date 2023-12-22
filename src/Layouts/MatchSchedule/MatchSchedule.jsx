import React, { useState, useEffect } from "react";
import { getMatches } from "Services/General/Match";
import useFetchFunction from "Hooks/useFetchFunction";
import Match from "Components/Match/Match";
import MatchModal from "Components/MatchModal/MatchModal";
import EditMatchModal from "Components/EditMatchModal/EditMatchModal";
import { formatDateAndTime } from "Utils/FormatDate";
import { ScheduleContainer, Title } from "./MatchSchedule.styled";

const MatchSchedule = () => {
  const [matchesData, error, isLoading, dataFetch] = useFetchFunction();
  const [matches, setMatchesData] = useState([]);

  useEffect(() => {
    getMatches(dataFetch, 2);
  }, []);

  useEffect(() => {
    if (error) return;
    else if (matchesData && matchesData.length > 0) setMatchesData(matchesData);
  }, [error, matchesData]);

  const [selectedMatch, setSelectedMatch] = useState(null);
  const [editingMatch, setEditingMatch] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  const handleCloseModal = () => {
    setSelectedMatch(null);
    setEditingMatch(null);
    setIsEditMode(false);
  };

  return (
    <ScheduleContainer>
      <Title>Football Schedule Fixtures</Title>
      {matchesData &&
        matchesData.length !== 0 &&
        matchesData.map((match) => (
          <Match
            key={match.id}
            matchId={match.id}
            homeTeamId={match.homeTeam.id}
            stadiumId={match.stadium.id}
            awayTeamId={match.awayTeam.id}
            homeTeam={match.homeTeam.name}
            awayTeam={match.awayTeam.name}
            logoOfHome={match.homeTeam.photoUrl}
            logoOfAway={match.awayTeam.photoUrl}
            venue={match.stadium.name}
            date={formatDateAndTime(match.date)[0]}
            time={formatDateAndTime(match.date)[1]}
            mainReferee={match.mainReferee}
            linesmen={[match.firstLineMan, match.secondLineMan]}
            setSelectedMatch={setSelectedMatch}
            setEditingMatch={setEditingMatch}
            setIsEditMode={setIsEditMode}
          />
        ))}
      <MatchModal match={selectedMatch} onClose={handleCloseModal} />
      <EditMatchModal match={editingMatch} onClose={handleCloseModal} isEditMode={isEditMode} />
    </ScheduleContainer>
  );
};

export default MatchSchedule;
