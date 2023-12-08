import React, { useState } from "react";

import {
  FormContainer,
  FormHeading,
  FormField,
  Label,
  TextInput,
  DateInput,
  SubmitButton,
  FileInput,
  FileInputLabel,
  PreviewImage,
} from "./FanForm.styled";

const FanForm = () => {
  const [formData, setFormData] = useState({
    dateOfBirth: "",
    arabicName: "",
    motherName: "",
    nationalId: "",
    nationalIdImage: null,
  });

  const [previewImageUrl, setPreviewImageUrl] = useState("");

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setPreviewImageUrl(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      setFormData({ ...formData, nationalIdImage: e.target.files[0] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Fan Form Submitted");
  };

  return (
    <FormContainer>
      <FormHeading>Update Information</FormHeading>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="dateOfBirth">Date of Birth*</Label>
          <DateInput type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
        </FormField>

        <FormField>
          <Label htmlFor="arabicName">Name in Arabic*</Label>
          <TextInput type="text" id="arabicName" name="arabicName" value={formData.arabicName} onChange={handleInputChange} required />
        </FormField>

        <FormField>
          <Label htmlFor="motherName">Mother Name in Arabic*</Label>
          <TextInput type="text" id="motherName" name="motherName" value={formData.motherName} onChange={handleInputChange} required />
        </FormField>

        <FormField>
          <Label htmlFor="nationalId">National ID number*</Label>
          <TextInput type="text" id="nationalId" name="nationalId" value={formData.nationalId} onChange={handleInputChange} required />
        </FormField>

        <FormField>
          <Label htmlFor="nationalIdImage">Image of National ID front side*</Label>
          <FileInputLabel htmlFor="nationalIdImage">Choose image</FileInputLabel>
          <FileInput
            type="file"
            id="nationalIdImage"
            name="nationalIdImage"
            accept="image/png, image/jpeg"
            onChange={handleImageChange}
            required
          />
          {previewImageUrl && <PreviewImage src={previewImageUrl} alt="National ID Preview" />}
        </FormField>

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </FormContainer>
  );
};

export default FanForm;
