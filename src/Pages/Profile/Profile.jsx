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
import ConfirmModal from "Components/ConfirmModal/ConfirmModal";

const Profile = ({ userId }) => {
  //* States for user data
  const [user, setUser] = useState(null);
  const [imageUrl, setImageUrl] = useState(Ball);
  const [isEditMode, setIsEditMode] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  //* States for editable fields
  const [phoneNumber, setPhoneNumber] = useState("01146188908");
  const [firstName, setFirstName] = useState("Ziad");
  const [lastName, setLastName] = useState("Sherif");
  const [address, setAddress] = useState("El Haram");
  const [city, setCity] = useState("Giza");
  const [language, setLanguage] = useState("Arabic");

  //! Password and confirm password
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleCancel = () => {
    setPhoneNumber(user.phoneNumber);
    setFirstName(user.firstName);
    setLastName(user.lastName);
    setAddress(user.address);
    setCity(user.city);
    setLanguage(user.language);
    setIsEditMode(false);
  };
  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmSave = () => {
    setShowConfirmModal(false);
    setIsEditMode(false);
    console.log("Saving Data:", {
      firstName,
      lastName,
      phoneNumber,
      address,
      city,
      language,
    });
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
          <EditButtonContainer isEditMode={isEditMode}>
            {isEditMode ? (
              <>
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="contained" onClick={handleCancel}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button variant="contained" onClick={() => setIsEditMode(true)}>
                Edit
              </Button>
            )}
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
                value={phoneNumber}
                readOnly={!isEditMode}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FieldContainer>
          </FieldRow>
          <FieldRow>
            <FieldContainer>
              <ProfileField>First Name</ProfileField>
              <ProfileInput
                type="text"
                value={firstName}
                readOnly={!isEditMode}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Last Name</ProfileField>
              <ProfileInput
                type="text"
                value={lastName}
                readOnly={!isEditMode}
                onChange={(e) => setLastName(e.target.value)}
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
                value={address}
                readOnly={!isEditMode}
                onChange={(e) => setAddress(e.target.value)}
              />
            </FieldContainer>
          </FieldRow>
          <FieldRow>
            <FieldContainer>
              <ProfileField>Password</ProfileField>
              <ProfileInput
                type="password"
                value={password}
                placeholder="Passowrd"
                readOnly={!isEditMode}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Confirm Password</ProfileField>
              <ProfileInput
                type="password"
                value={confirmPassword}
                readOnly={!isEditMode}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FieldContainer>
          </FieldRow>
          <FieldRow>
            <FieldContainer>
              <ProfileField>City</ProfileField>
              <ProfileInput
                type="text"
                value={city}
                readOnly={!isEditMode}
                onChange={(e) => setCity(e.target.value)}
              />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Language</ProfileField>
              <ProfileInput
                type="text"
                value={language}
                readOnly={!isEditMode}
                onChange={(e) => setLanguage(e.target.value)}
              />
            </FieldContainer>
          </FieldRow>
        </AccountInfoSection>
      </InfoContainer>
      <ConfirmModal
        open={showConfirmModal}
        handleClose={() => setShowConfirmModal(false)}
        handleConfirm={handleConfirmSave}
      />
    </ProfileContainer>
  );
};

export default Profile;
