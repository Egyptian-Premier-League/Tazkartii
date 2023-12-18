import React, { useState, useEffect } from "react";
import { Form, Input, Button, FormTitle } from "./AddStadiumForm.styled";
import { useNavigate } from "react-router-dom";
import createStadium from "Services/General/CreateStadium";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Contexts/Auth-Context";
import Progress from "Components/Progress/Progress";

const AddStadiumForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [stadiumData, error, isLoading, dataFetch] = useFetchFunction();

  const [stadiumDetails, setStadiumDetails] = useState({
    stadiumName: "",
    length: "",
    width: "",
  });

  const handleNameChange = (e) => {
    setStadiumDetails({ ...stadiumDetails, stadiumName: e.target.value });
  };

  const handleLengthChange = (e) => {
    setStadiumDetails({ ...stadiumDetails, length: e.target.value });
  };

  const handleWidthChange = (e) => {
    setStadiumDetails({ ...stadiumDetails, width: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createStadium(dataFetch, auth, { name: stadiumDetails.stadiumName, length: stadiumDetails.length, width: stadiumDetails.width });
  };

  useEffect(() => {
    if (error) return;
    else if (stadiumData && stadiumData.message) {
      alert(stadiumData.message, "success");
      navigate("/");
    }
  }, [error, stadiumData]);

  if (isLoading)
    return (
      <Form>
        <Progress>
          <p>....is Loading</p>
        </Progress>
      </Form>
    );

  return (
    <Form>
      <FormTitle>Add New Stadium</FormTitle>
      <Input name="stadiumName" placeholder="Stadium Name" value={stadiumDetails.stadiumName} onChange={handleNameChange} />
      <Input type="number" min={0} placeholder="Stadium Length" value={stadiumDetails.length} onChange={handleLengthChange} />
      <Input type="number" min={0} placeholder="Stadium Width" value={stadiumDetails.width} onChange={handleWidthChange} />
      <Button onClick={(e) => handleSubmit(e)}>Add Stadium</Button>
    </Form>
  );
};

export default AddStadiumForm;
