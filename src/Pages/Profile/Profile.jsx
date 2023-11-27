import React, { useState, useEffect } from "react";
import {
  ProfileContainer,
  ProfileHeading,
  ProfileSection,
  ProfileField,
  ProfileValue,
} from "./Profile.styled";

const Profile = ({ userId }) => {
  const [user, setUser] = useState(null);

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
      username: "userexample",
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@example.com",
      authority: true,
    };
  };

  if (!user) {
    return <ProfileContainer>Loading...</ProfileContainer>;
  }

  return (
    <ProfileContainer>
      <ProfileHeading>Profile</ProfileHeading>
      <ProfileSection>
        <ProfileField>Username:</ProfileField>
        <ProfileValue>{user.username}</ProfileValue>
      </ProfileSection>
      <ProfileSection>
        <ProfileField>First Name:</ProfileField>
        <ProfileValue>{user.firstName}</ProfileValue>
      </ProfileSection>
      <ProfileSection>
        <ProfileField>Last Name:</ProfileField>
        <ProfileValue>{user.lastName}</ProfileValue>
      </ProfileSection>
      <ProfileSection>
        <ProfileField>Email Address:</ProfileField>
        <ProfileValue>{user.email}</ProfileValue>
      </ProfileSection>
    </ProfileContainer>
  );
};

export default Profile;
