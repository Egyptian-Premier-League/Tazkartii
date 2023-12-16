import React, { useState, useEffect } from "react";
import { editMatch, getMatchDetails } from "Services/General/Match";
import { useAuth } from "Contexts/Auth-Context";
import useFetchFunction from "Hooks/useFetchFunction";
import Progress from "Components/Progress/Progress";
import { ModalContainer, ModalContent, CloseButton, Form, Input, Label, SubmitButton } from "./EditMatchModal.styled";

const EditMatchModal = ({ match, onClose, setIsEditMode, isEditMode }) => {
  const auth = useAuth();
  const [editMatchesData, error, isLoading, editDataFetch] = useFetchFunction();

  const [formData, setFormData] = useState({
    homeTeam: "",
    awayTeam: "",
    venue: "",
    date: "",
    time: "",
    mainReferee: "",
    linesmen: [],
  });

  useEffect(() => {
    if (match) {
      setFormData({
        homeTeam: match.homeTeam,
        awayTeam: match.awayTeam,
        venue: match.venue,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    editMatch(
      editDataFetch,
      {
        homeTeamId: match.homeTeamId,
        awayTeamId: match.awayTeamId,
        matchDate: "2023-12-30T12:30:00",
        mainReferee: formData.mainReferee,
        firstLineMan: match.linesmen[0],
        secondLineMan: match.linesmen[1],
      },
      match.matchId,
      auth
    );
  };

  if (!formData) {
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
            <Input name="homeTeam" value={formData.homeTeam} onChange={handleChange} />

            <Label>Away Team:</Label>
            <Input name="awayTeam" value={formData.awayTeam} onChange={handleChange} />

            <Label>Venue:</Label>
            <Input name="venue" value={formData.venue} onChange={handleChange} />

            <Label>Date:</Label>
            <Input type="date" name="date" value={formData.date} onChange={handleChange} />

            <Label>Time:</Label>
            <Input type="time" name="time" value={formData.time} onChange={handleChange} />

            <Label>Main Referee:</Label>
            <Input name="mainReferee" value={formData.mainReferee} onChange={handleChange} />

            <Label>Linesmen:</Label>
            <Input
              name="linesmen"
              value={formData?.linesmen?.join(",")}
              onChange={(e) => setFormData({ ...formData, linesmen: e.target.value.split(",") })}
            />

            <SubmitButton onClick={(e) => handleSubmit(e)}>Update</SubmitButton>
          </Form>
        </ModalContent>
      </ModalContainer>
    )
  );
};

export default EditMatchModal;
