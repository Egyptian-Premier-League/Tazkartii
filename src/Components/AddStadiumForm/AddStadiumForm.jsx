import React, { useState } from "react";
import { Form, Input, Button, FormTitle } from "./AddStadiumForm.styled";

const AddStadiumForm = () => {
  const [stadiumDetails, setStadiumDetails] = useState({
    stadiumName: "",
    shape: "",
    seatCount: "",
  });

  const handleChange = (e) => {
    setStadiumDetails({ ...stadiumDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Stadium Details:", stadiumDetails);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Add New Stadium</FormTitle>
      <Input name="stadiumName" placeholder="Stadium Name" onChange={handleChange} />
      <Input name="shape" placeholder="Stadium Shape" onChange={handleChange} />
      <Input type="number" name="seatCount" placeholder="Number of Seats" onChange={handleChange} />
      <Button type="submit">Add Stadium</Button>
    </Form>
  );
};

export default AddStadiumForm;
