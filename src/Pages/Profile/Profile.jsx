import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import Ball from "Assets/Images/ball.ico";
import {
  ProfileContainer,
  PhotoContainer,
  InfoContainer,
  PersonalInfoSection,
  AccountInfoSection,
  ProfileHeading,
  ProfileField,
  ProfileInput,
  ProfileImage,
  FieldRow,
  FieldContainer,
  EditButtonContainer,
} from "./Profile.styled";

import MediaProfile from "Components/MediaProfile/MediaProfile";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [imageUrl, setImageUrl] = useState(Ball);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUserDataById(userId);
      setUser(userData);
    };

    fetchUserData();
  }, [userId]);

  const getUserDataById = async (id) => {
    return {
      id: id,
      username: "zsherif",
      firstName: "Ziad",
      lastName: "Sherif",
      phoneNumber: "01146188908",
      email: "zsherif308@example.com",
      city: "Giza",
      address: "El Haram",
      language: "English",
      authority: true,
    };
  };

  if (!user) {
    return <ProfileContainer>Loading...</ProfileContainer>;
  }

  return (
    <ProfileContainer>
      <PhotoContainer>
        <MediaProfile imageUrl={imageUrl} setImageUrl={setImageUrl} />
        {imageUrl && <ProfileImage src={imageUrl} alt="Profile" />}
      </PhotoContainer>
      <InfoContainer>
        <PersonalInfoSection>
          <EditButtonContainer>
            <Button variant="contained" onClick={toggleEditMode}>
              Edit
            </Button>
          </EditButtonContainer>

          <ProfileHeading>Personal Information</ProfileHeading>
          <FieldRow>
            <FieldContainer>
              <ProfileField>Username</ProfileField>
              <ProfileInput type="text" value={user.username} readOnly />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Phone Number</ProfileField>
              <ProfileInput
                type="tel"
                value={user.phoneNumber}
                readOnly={!isEditMode}
              />
            </FieldContainer>
          </FieldRow>
          <FieldRow>
            <FieldContainer>
              <ProfileField>First Name</ProfileField>
              <ProfileInput
                type="text"
                value={user.firstName}
                readOnly={!isEditMode}
              />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Last Name</ProfileField>
              <ProfileInput
                type="text"
                value={user.lastName}
                readOnly={!isEditMode}
              />
            </FieldContainer>
          </FieldRow>
        </PersonalInfoSection>

        <AccountInfoSection>
          <ProfileHeading>Account Information</ProfileHeading>
          <FieldRow>
            <FieldContainer>
              <ProfileField>Email</ProfileField>
              <ProfileInput type="email" value={user.email} readOnly />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Address</ProfileField>
              <ProfileInput
                type="text"
                value={user.address}
                readOnly={!isEditMode}
              />
            </FieldContainer>
          </FieldRow>
          <FieldRow>
            <FieldContainer>
              <ProfileField>Password</ProfileField>
              <ProfileInput
                type="password"
                value={user.password}
                placeholder="Passowrd"
                readOnly={!isEditMode}
              />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Confirm Password</ProfileField>
              <ProfileInput
                type="password"
                value={user.confirmPassword}
                readOnly={!isEditMode}
                placeholder="Confirm Password"
              />
            </FieldContainer>
          </FieldRow>
          <FieldRow>
            <FieldContainer>
              <ProfileField>City</ProfileField>
              <ProfileInput
                type="text"
                value={user.city}
                readOnly={!isEditMode}
              />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Language</ProfileField>
              <ProfileInput
                type="text"
                value={user.language}
                readOnly={!isEditMode}
              />
            </FieldContainer>
          </FieldRow>
        </AccountInfoSection>
      </InfoContainer>
    </ProfileContainer>
  );
};

export default Profile;
