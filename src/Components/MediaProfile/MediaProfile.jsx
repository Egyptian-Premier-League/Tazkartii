import React from "react";
import Stack from "@mui/material/Stack";
import { ImageButton, Input, Label } from "./MediaProfile.styled";

const MediaProfile = ({ setImageUrl, imageUrl }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageUrl("");
    }
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Label htmlFor="upload-image">
        {!imageUrl&& "Upload" }
        <Input
          id="upload-image"
          accept="image/*"
          type="file"
          onChange={handleFileUpload}
        />
        {imageUrl && <ImageButton imageUrl={imageUrl} component="span" />}
      </Label>
    </Stack>
  );
};

export default MediaProfile;
