import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Contexts/Auth-Context";
import Button from "@mui/material/Button";
import ConfirmModal from "Components/ConfirmModal/ConfirmModal";
import getProfie, { editProfile } from "Services/Users/Profile";
import changePassword from "Services/Users/ChangePassword";
import useFetchFunction from "Hooks/useFetchFunction";
import Progress from "Components/Progress/Progress";

import Ball from "Assets/Images/ball.ico";
import {
  ProfileContainer,
  InfoContainer,
  PersonalInfoSection,
  AccountInfoSection,
  ProfileHeading,
  ProfileField,
  ProfileInput,
  FieldRow,
  FieldContainer,
  EditButtonContainer,
  StatusCardContainer,
  StatusTitle,
  StatusText,
  StatusButton,
  StatusLogo,
  RoleBadge,
} from "./Profile.styled";

const Profile = ({ userId }) => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [profileData, error, isLoading, dataFetch] = useFetchFunction();
  const [editProfileData, errorEditProfile, isLoadingEditProfile, dataFetchEditProfile] = useFetchFunction();
  const [changePasswordData, errorChangePassword, isLoadingChangePassword, dataFetchChangePassword] = useFetchFunction();

  //* States for user data
  const [user, setUser] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    language: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  //* States for editable fields
  const [phoneNumber, setPhoneNumber] = useState(profileData?.phoneNumber || "");
  const [firstName, setFirstName] = useState(profileData?.firstName || "");
  const [lastName, setLastName] = useState(profileData?.lastName || "");
  const [address, setAddress] = useState(profileData?.address || "");
  const [city, setCity] = useState(profileData?.city || "");
  const [language, setLanguage] = useState(profileData?.language || "");

  //! Password and confirm password
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    getProfie(dataFetch, auth);
  }, []);

  useEffect(() => {
    if (error) return;
    else if (profileData) {
      setUser({
        username: profileData.username || "",
        email: profileData.email || "",
        role: profileData.role || "",
        phoneNumber: profileData.phoneNumber || "",
        firstName: profileData?.firstName || "",
        lastName: profileData.lastName || "",
        address: profileData.address || "",
        city: profileData.city || "",
        language: profileData.language || "",
      });
      setPhoneNumber(profileData.phoneNumber || "");
      setFirstName(profileData.firstName || "");
      setLastName(profileData.lastName || "");
      setAddress(profileData.address || "");
      setCity(profileData.city || "");
      setLanguage(profileData.language || "");
    }
  }, [error, profileData]);

  const handleCancel = () => {
    setIsEditMode(false);
    getProfie(dataFetch, auth);
  };
  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmSave = () => {
    editProfile(dataFetchEditProfile, auth, {
      firstName: firstName,
      lastName: lastName,
      address: address,
      language: language,
      birthdate: profileData?.birthdate,
      city: profileData?.city,
      gender: profileData?.gender,
    });
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

  useEffect(() => {
    if (errorEditProfile) return;
    else if (editProfileData) {
      // console.log("editProfileData", editProfileData);
      getProfie(dataFetch, auth);
    }
  }, [errorEditProfile, editProfileData]);

  const handlePasswordChange = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    changePassword(dataFetchChangePassword, auth, password);
    setPassword("");
    setConfirmPassword("");
  };

  const handleFanForm = () => {
    navigate("/fan-form");
  };

  if (!user && !isLoading) {
    return (
      <ProfileContainer>
        Loading... <Progress />
      </ProfileContainer>
    );
  }

  const FanId = () => {
    return (
      <StatusCardContainer>
        <StatusLogo src={Ball} alt="Tazkarti Logo" />
        <StatusTitle>Non-Sports Account</StatusTitle>
        <StatusText>You are not eligible for Tazkarti ID card. To be able to have one, you need to have a sports account.</StatusText>
        <StatusButton onClick={handleFanForm}>I want to get Tazkarti Sports ID</StatusButton>
      </StatusCardContainer>
    );
  };
  return (
    <ProfileContainer>
      <FanId />
      <InfoContainer>
        <PersonalInfoSection>
          <FieldContainer>
            <ProfileField>Role</ProfileField>
            <RoleBadge $role={user.role}>{user.role || "User"}</RoleBadge>
          </FieldContainer>
          <EditButtonContainer $isEditMode={isEditMode}>
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
              <ProfileInput type="tel" value={phoneNumber} readOnly={!isEditMode} onChange={(e) => setPhoneNumber(e.target.value)} />
            </FieldContainer>
          </FieldRow>
          <FieldRow>
            <FieldContainer>
              <ProfileField>First Name</ProfileField>
              <ProfileInput type="text" value={firstName} readOnly={!isEditMode} onChange={(e) => setFirstName(e.target.value)} />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Last Name</ProfileField>
              <ProfileInput type="text" value={lastName} readOnly={!isEditMode} onChange={(e) => setLastName(e.target.value)} />
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
              <ProfileInput type="text" value={address} readOnly={!isEditMode} onChange={(e) => setAddress(e.target.value)} />
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
              <ProfileInput type="text" value={city} readOnly={!isEditMode} onChange={(e) => setCity(e.target.value)} />
            </FieldContainer>
            <FieldContainer>
              <ProfileField>Language</ProfileField>
              <ProfileInput type="text" value={language} readOnly={!isEditMode} onChange={(e) => setLanguage(e.target.value)} />
            </FieldContainer>
          </FieldRow>
        </AccountInfoSection>
      </InfoContainer>
      <ConfirmModal open={showConfirmModal} handleClose={() => setShowConfirmModal(false)} handleConfirm={handleConfirmSave} />
    </ProfileContainer>
  );
};

export default Profile;
