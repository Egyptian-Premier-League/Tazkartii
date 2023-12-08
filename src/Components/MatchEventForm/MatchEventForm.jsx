import React, { useState } from "react";
import { Form, Input, Button, FormTitle, Label } from "./MatchEventForm.styled";

const MatchEventForm = () => {
  const [matchDetails, setMatchDetails] = useState({
    matchName: "",
    teams: "",
    date: "",
    location: "",
  });

  const handleChange = (e) => {
    setMatchDetails({ ...matchDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Match Details:", matchDetails);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Create New Match Event</FormTitle>
      <Label>
        Match Name:
        <Input name="matchName" placeholder="Match Name" onChange={handleChange} />
      </Label>
      <Label>
        Teams:
        <Input name="teams" placeholder="Teams" onChange={handleChange} />
      </Label>
      <Label>
        Date:
        <Input type="date" name="date" onChange={handleChange} />
      </Label>
      <Label>
        Location:
        <Input name="location" placeholder="Location" onChange={handleChange} />
      </Label>
      <Button type="submit">Create Match</Button>
    </Form>
  );
};

export default MatchEventForm;
