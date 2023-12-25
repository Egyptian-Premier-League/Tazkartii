import React, { useState, useEffect } from "react";
import { Form, Input, Button, FormTitle, Label, Select } from "./MatchEventForm.styled";
import getStadiums from "Services/General/GetStadiums";
import getTeams from "Services/General/GetTeams";
import { createMatch } from "Services/General/Match";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Contexts/Auth-Context";

const refereesList = ["Samir Othman", "Mohamed Farouk", "Ibrahim Nour El Din", "Gehad Grisha", "Sami Halhal", "Mohamed El Hanafy"];
const linesManList = [
  ["Ahmed El Ghandour", "Ahmed El Shenawy"],
  ["Ahmed El Maghraby", "Ahmed El Saadany"],
  ["Ahmed El Ghandour", "Ahmed El Saadany"],
  ["Ahmed El Shenawy", "Ahmed El Maghraby"],
];
// Calculate today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

const MatchEventForm = () => {
  const auth = useAuth();
  const [stadiumsData, error, isLoading, dataFetch] = useFetchFunction();
  const [teamsData, errorTeams, isLoadingTeams, dataFetchTeams] = useFetchFunction();
  const [matchData, errorMatch, isLoadingMatch, dataFetchMatch] = useFetchFunction();
  // use states
  const [stadtiumsData, setStadiumsData] = useState([]);
  const [stadiumsOptions, setStadiumsOptions] = useState([]);
  const [teamsOptions, setTeamsOptions] = useState([]);
  const [matchDetails, setMatchDetails] = useState({
    homeTeamId: teamsOptions[0]?.id,
    awayTeamId: teamsOptions[1]?.id,
    stadiumId: stadtiumsData[0]?.id,
    stadium: stadtiumsData[0]?.name,
    date: "",
    time: "",
    mainReferee: refereesList[0],
    linesmen: [],
  });

  useEffect(() => {
    getStadiums(dataFetch, auth);
    getTeams(dataFetchTeams, auth);
  }, []);

  useEffect(() => {
    if (errorTeams) return;
    if (teamsData && teamsData.length > 1) {
      setTeamsOptions(teamsData);
      setMatchDetails((prevDetails) => ({
        ...prevDetails,
        homeTeamId: teamsData[0].id,
        awayTeamId: teamsData[1].id,
      }));
    }
  }, [teamsData]);

  useEffect(() => {
    if (stadiumsData && stadiumsData.length > 0) {
      setStadiumsOptions(stadiumsData);
      setMatchDetails((prevDetails) => ({
        ...prevDetails,
        stadiumId: stadiumsData[0].id,
      }));
    }
  }, [stadiumsData]);

  const renderTeamOptions = (selectedTeamId) => {
    return teamsOptions
      .filter((team) => team.id !== selectedTeamId)
      .map((team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ));
  };

  const renderStadiumOptions = () => {
    return stadiumsOptions.map((stadium) => (
      <option key={stadium.id} value={stadium.id}>
        {stadium.name}
      </option>
    ));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "homeTeamId" || name === "awayTeamId") {
      const selectedTeam = teamsOptions.find((team) => team.id.toString() === value);
      setMatchDetails({
        ...matchDetails,
        [name]: selectedTeam.id,
        [name === "homeTeamId" ? "homeTeamName" : "awayTeamName"]: selectedTeam.name,
      });
    } else {
      setMatchDetails({ ...matchDetails, [name]: value });
    }
  };

  const handleLinesmenChange = (e) => {
    setMatchDetails({ ...matchDetails, linesmen: e.target.value.split(", ") });
  };

  const resetForm = () => {
    setMatchDetails({
      homeTeam: teamsOptions[0]?.name,
      awayTeam: teamsOptions[1]?.name,
      stadiumId: stadtiumsData[0]?.name,
      date: "",
      time: "",
      mainReferee: refereesList[0],
      linesmen: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (matchDetails.homeTeamId === matchDetails.awayTeamId) {
      alert("Home team and away team cannot be the same.");
      return;
    }

    if (!validateData()) return;

    if (matchDetails.linesmen.length < 2) {
      alert("Please select two linesmen.");
      return;
    }

    const matchDateTime = new Date(`${matchDetails.date}T${matchDetails.time}`).toISOString();

    const payload = {
      homeTeamId: matchDetails.homeTeamId,
      awayTeamId: matchDetails.awayTeamId,
      matchDate: matchDateTime,
      stadiumId: matchDetails.stadiumId,
      mainReferee: matchDetails.mainReferee,
      firstLineMan: matchDetails.linesmen[0],
      secondLineMan: matchDetails.linesmen[1],
    };

    createMatch(dataFetchMatch, payload, auth);

    resetForm();
  };

  const validateData = () => {
    if (
      !matchDetails.homeTeamId ||
      !matchDetails.awayTeamId ||
      !matchDetails.stadiumId ||
      !matchDetails.date ||
      !matchDetails.time ||
      !matchDetails.mainReferee ||
      !matchDetails.linesmen
    ) {
      alert("Please fill all fields");
      return false;
    }
    return true;
  };
  useEffect(() => {
    if (errorMatch) return;
    else if (matchData && matchData.matchId) alert("Match created successfully.");
  }, [matchData, errorMatch]);

  return (
    <Form>
      <FormTitle>Create New Match Event</FormTitle>
      <Label>
        <div>Home Team:</div>{" "}
        <Select name="homeTeamId" onChange={handleChange} value={matchDetails.homeTeamId}>
          {renderTeamOptions(matchDetails.awayTeamId)}
        </Select>
      </Label>
      <Label>
        <div>Away Team:</div>

        <Select name="awayTeamId" onChange={handleChange} value={matchDetails.awayTeamId}>
          {renderTeamOptions(matchDetails.homeTeamId)}
        </Select>
      </Label>

      <Label>
        <div>Venue</div>{" "}
        <Select name="stadiumId" onChange={handleChange} value={matchDetails.stadiumId}>
          {renderStadiumOptions()}
        </Select>
      </Label>
      <Label>
        <div>Date:</div> <Input type="date" min={today} name="date" onChange={handleChange} />
      </Label>
      <Label>
        <div>Time:</div>
        <Input type="time" name="time" min={today} onChange={handleChange} />
      </Label>
      <Label>
        <div>Main Referee:</div>
        <Select name="mainReferee" onChange={handleChange} value={matchDetails.mainReferee}>
          {refereesList.map((referee) => (
            <option key={referee} value={referee}>
              {referee}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        <div>Linesmen (comma separated):</div>
        <Select name="linesmen" onChange={handleLinesmenChange} value={`${matchDetails.linesmen[0]}, ${matchDetails.linesmen[1]}`}>
          {linesManList.map((pair, index) => (
            <option key={index} value={pair.join(", ")}>
              {pair.join(" & ")}
            </option>
          ))}
        </Select>
      </Label>
      <Button onClick={(e) => handleSubmit(e)}>Create Match</Button>
      <Button type="button" onClick={resetForm}>
        Reset Form
      </Button>
    </Form>
  );
};

export default MatchEventForm;
