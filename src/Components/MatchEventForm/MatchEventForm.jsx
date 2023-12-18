import React, { useState, useEffect } from "react";
import { Form, Input, Button, FormTitle, Label, Select } from "./MatchEventForm.styled";
import getStadiums from "Services/General/GetStadiums";
import getTeams from "Services/General/GetTeams";
import { createMatch } from "Services/General/Match";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Contexts/Auth-Context";

// const teamsList = ["Al Ahly", "El Zamalek", "Pyrmaids FC", "El Gouna FC", "El Masry", "El Entag El Harby"];
const refereesList = ["Ahmed El Ghandour", "Ahmed El Shenawy", "Ahmed El Maghraby", "Ahmed El Saadany"];
// const venuesList = ["Cairo Stadium", "Borg El Arab Stadium", "El Salam Stadium", "El Gouna Stadium"];

const MatchEventForm = () => {
  const auth = useAuth();
  const [stadiumsData, error, isLoading, dataFetch] = useFetchFunction();
  const [teamsData, errorTeams, isLoadingTeams, dataFetchTeams] = useFetchFunction();
  const [matchData, errorMatch, isLoadingMatch, dataFetchMatch] = useFetchFunction();
  // use states
  const [stadtiumsData, setStadiumsData] = useState([]);
  const [teams, setTeamsData] = useState([]);
  const [matchDetails, setMatchDetails] = useState({
    homeTeam: teams[0]?.name,
    awayTeam: teams[1]?.name,
    venue: stadtiumsData[0]?.name,
    date: "",
    time: "",
    mainReferee: refereesList[0],
    linesmen: [],
  });

  // useeffects to fetch data from the backend
  useEffect(() => {
    getStadiums(dataFetch, auth);
    getTeams(dataFetchTeams, auth);
  }, []);

  useEffect(() => {
    if (errorTeams) return;
    else if (teamsData && teamsData.length > 0) {
      setTeamsData(teamsData);
      setMatchDetails((prevDetails) => ({
        ...prevDetails,
        homeTeam: teamsData[0]?.name,
        awayTeam: teamsData[1]?.name,
      }));
    }
  }, [teamsData]);

  useEffect(() => {
    if (error) return;
    else if (stadiumsData && stadiumsData.length > 0) setStadiumsData(stadiumsData);
  }, [stadiumsData]);

  // functions to handle the change of the input fields
  const handleChange = (e) => {
    setMatchDetails({ ...matchDetails, [e.target.name]: e.target.value });
  };

  const handleLinesmenChange = (e) => {
    setMatchDetails({ ...matchDetails, linesmen: e.target.value.split(",") });
  };

  const resetForm = () => {
    setMatchDetails({
      homeTeam: teams[0]?.name,
      awayTeam: teams[1]?.name,
      venue: stadtiumsData[0]?.name,
      date: "",
      time: "",
      mainReferee: refereesList[0],
      linesmen: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // for (const [key, value] of Object.entries(matchDetails)) {
    //   if (Array.isArray(value) ? !value.length : !value) {
    //     alert(`Please fill out the ${key} field.`);
    //     return;
    //   }
    // }
    console.log("Match Details:", matchDetails);

    createMatch(
      dataFetchMatch,
      {
        homeTeamId: 11,
        awayTeamId: 12,
        matchDate: "2023-12-30T07:30:00",
        stadiumId: 11,
        mainReferee: "Samir Osman",
        firstLineMan: "Ahmed",
        secondLineMan: "Mohamed",
      },
      auth
    );

    console.log("Match Details:", matchDetails);
    // On successful submission here
    resetForm();
  };

  useEffect(() => {
    if (errorMatch) return;
    else if (matchData && matchData.length > 0) alert("Match created successfully.");
  }, [matchData, errorMatch]);

  return (
    <Form>
      <FormTitle>Create New Match Event</FormTitle>
      <Label>
        <div>Home Team:</div>{" "}
        <Select name="homeTeam" onChange={handleChange} value={matchDetails.homeTeam}>
          {teamsData !== undefined &&
            teams.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
        </Select>
      </Label>
      <Label>
        <div>Away Team:</div>

        <Select name="awayTeam" onChange={handleChange} value={matchDetails.awayTeam}>
          {teamsData !== undefined &&
            teams.map((team) => (
              <option key={team.id} value={team.name}>
                {team.name}
              </option>
            ))}
        </Select>
      </Label>

      <Label>
        <div>Venue</div>{" "}
        <Select name="venue" onChange={handleChange} value={matchDetails.venue}>
          {stadiumsData !== undefined &&
            stadtiumsData.map((venu) => (
              <option key={venu.id} value={venu.name}>
                {venu.name}
              </option>
            ))}
        </Select>
      </Label>
      <Label>
        <div>Date:</div> <Input type="date" name="date" onChange={handleChange} />
      </Label>
      <Label>
        <div>Time:</div>
        <Input type="time" name="time" onChange={handleChange} />
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
        <Input name="linesmen" placeholder="Linesmen" onChange={handleLinesmenChange} />
      </Label>
      <Button onClick={(e) => handleSubmit(e)}>Create Match</Button>
      <Button type="button" onClick={resetForm}>
        Reset Form
      </Button>
    </Form>
  );
};

export default MatchEventForm;
