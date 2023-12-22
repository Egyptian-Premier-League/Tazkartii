import React, { useState, useEffect } from "react";
import { editMatch } from "Services/General/Match";
import getStadiums from "Services/General/GetStadiums";
import getTeams from "Services/General/GetTeams";
import { useAuth } from "Contexts/Auth-Context";
import useFetchFunction from "Hooks/useFetchFunction";
import Progress from "Components/Progress/Progress";
import { ModalContainer, ModalContent, CloseButton, Form, Label, Input, Select, SubmitButton } from "./EditMatchModal.styled";

const refereesList = ["Samir Othman", "Mohamed Farouk", "Ibrahim Nour El Din", "Gehad Grisha", "Sami Halhal", "Mohamed El Hanafy"];
const linesManList = [
  ["Ahmed El Ghandour", "Ahmed El Shenawy"],
  ["Ahmed El Maghraby", "Ahmed El Saadany"],
  ["Ahmed El Ghandour", "Ahmed El Saadany"],
  ["Ahmed El Shenawy", "Ahmed El Maghraby"],
];
const today = new Date().toISOString().split("T")[0];

const EditMatchModal = ({ match, onClose, isEditMode }) => {
  const auth = useAuth();
  const [editMatchesData, error, isLoading, editDataFetch] = useFetchFunction();
  const [teamsData, errorTeams, isLoadingTeams, teamsDataFetch] = useFetchFunction();
  const [stadiumsData, errorStadiums, isLoadingStadiums, stadiumsDataFetch] = useFetchFunction();

  const [formData, setFormData] = useState({
    homeTeamId: "",
    awayTeamId: "",
    stadiumId: "",
    date: "",
    time: "",
    mainReferee: "",
    linesmen: [[]],
  });

  const [teams, setTeams] = useState([]);
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    getTeams(teamsDataFetch, auth);
    getStadiums(stadiumsDataFetch, auth);
  }, []);

  useEffect(() => {
    if (teamsData) setTeams(teamsData);
    if (stadiumsData) setStadiums(stadiumsData);
  }, [teamsData, stadiumsData]);

  useEffect(() => {
    if (match) {
      setFormData({
        homeTeamId: match.homeTeamId,
        awayTeamId: match.awayTeamId,
        stadiumId: match.stadiumId,
        date: match.date,
        time: match.time,
        mainReferee: match.mainReferee,
        linesmen: match.linesmen,
      });
    }
  }, [match]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleLinesmenChange = (e) => {
    setFormData({ ...formData, linesmen: e.target.value.split(", ") });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const matchDateTime = new Date(`${formData.date}T${formData.time}`).toISOString();
    editMatch(
      editDataFetch,
      {
        homeTeamId: formData.homeTeamId,
        awayTeamId: formData.awayTeamId,
        matchDate: matchDateTime,
        stadiumId: formData.stadiumId,
        mainReferee: formData.mainReferee,
        firstLineMan: formData.linesmen[0],
        secondLineMan: formData.linesmen[1],
      },
      match.matchId,
      auth
    );
  };

  useEffect(() => {
    if (error) return;
    else if (editMatchesData && editMatchesData.message) {
      alert(editMatchesData.message, "success");
      onClose();
    }
  }, [editMatchesData]);
  if (!formData || isLoadingTeams || isLoadingStadiums) {
    return <Progress>Loading...</Progress>;
  }

  return (
    isEditMode && (
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={onClose}>X</CloseButton>
          <h2>Edit Match Details</h2>
          <Form>
            <Label>Home Team:</Label>
            <Select name="homeTeamId" value={formData.homeTeamId} onChange={handleChange}>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </Select>

            <Label>Away Team:</Label>
            <Select name="awayTeamId" value={formData.awayTeamId} onChange={handleChange}>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </Select>

            <Label>Venue:</Label>
            <Select name="stadiumId" value={formData.stadiumId} onChange={handleChange}>
              {stadiums.map((stadium) => (
                <option key={stadium.id} value={stadium.id}>
                  {stadium.name}
                </option>
              ))}
            </Select>
            <Label>Date:</Label>
            <Input type="date" name="date" value={formData.date} min={today} onChange={handleChange} />

            <Label>Time:</Label>
            <Input type="time" name="time" value={formData.time} onChange={handleChange} />

            <Label>Main Referee:</Label>
            <Select name="mainReferee" value={formData.mainReferee} onChange={handleChange}>
              <option value={formData.mainReferee}>{formData.mainReferee}</option>
              {refereesList
                .filter((ref) => ref !== formData.mainReferee)
                .map((referee) => (
                  <option key={referee} value={referee}>
                    {referee}
                  </option>
                ))}
            </Select>

            <Label>Linesmen:</Label>
            <Select name="linesmen" value={formData.linesmen.join(", ")} onChange={handleLinesmenChange}>
              <option value={formData.linesmen.join(", ")}>{formData.linesmen.join(" & ")}</option>
              {linesManList
                .filter((pair) => pair.join(", ") !== formData.linesmen.join(", "))
                .map((pair, index) => (
                  <option key={index} value={pair.join(", ")}>
                    {pair.join(" & ")}
                  </option>
                ))}
            </Select>
            <SubmitButton onClick={(e) => handleSubmit(e)}>Update</SubmitButton>
          </Form>
        </ModalContent>
      </ModalContainer>
    )
  );
};

export default EditMatchModal;
