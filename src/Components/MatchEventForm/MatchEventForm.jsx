import React, { useState } from "react";
import { Form, Input, Button, FormTitle, Label, Select } from "./MatchEventForm.styled";

const teamsList = ["Al Ahly", "El Zamalek", "Pyrmaids FC", "El Gouna FC", "El Masry", "El Entag El Harby"];
const refereesList = ["Ahmed El Ghandour", "Ahmed El Shenawy", "Ahmed El Maghraby", "Ahmed El Saadany"];
const venuesList = ["Cairo Stadium", "Borg El Arab Stadium", "El Salam Stadium", "El Gouna Stadium"];

const MatchEventForm = () => {
  const [matchDetails, setMatchDetails] = useState({
    homeTeam: teamsList[0],
    awayTeam: teamsList[1],
    venue: venuesList[0],
    date: "",
    time: "",
    mainReferee: refereesList[0],
    linesmen: [],
  });

  const handleChange = (e) => {
    setMatchDetails({ ...matchDetails, [e.target.name]: e.target.value });
  };

  const handleLinesmenChange = (e) => {
    setMatchDetails({ ...matchDetails, linesmen: e.target.value.split(",") });
  };

  const resetForm = () => {
    setMatchDetails({
      homeTeam: teamsList[0],
      awayTeam: teamsList[1],
      venue: venuesList[0],
      date: "",
      time: "",
      mainReferee: refereesList[0],
      linesmen: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const [key, value] of Object.entries(matchDetails)) {
      if (Array.isArray(value) ? !value.length : !value) {
        alert(`Please fill out the ${key} field.`);
        return;
      }
    }

    console.log("Match Details:", matchDetails);
    // On successful submission here
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Create New Match Event</FormTitle>
      <Label>
        <div>Home Team:</div>{" "}
        <Select name="homeTeam" onChange={handleChange} value={matchDetails.homeTeam}>
          {teamsList.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        <div>Away Team:</div>

        <Select name="awayTeam" onChange={handleChange} value={matchDetails.awayTeam}>
          {teamsList.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </Select>
      </Label>

      <Label>
        <div>Venue</div>{" "}
        <Select name="venue" onChange={handleChange} value={matchDetails.venue}>
          {venuesList.map((venu) => (
            <option key={venu} value={venu}>
              {venu}
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
      <Button type="submit">Create Match</Button>
      <Button type="button" onClick={resetForm}>
        Reset Form
      </Button>
    </Form>
  );
};

export default MatchEventForm;
