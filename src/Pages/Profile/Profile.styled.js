import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 90%;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
`;
export const PhotoContainer = styled.div`
  flex: 1; 
  padding: 10px;
`;
export const InfoContainer = styled.div`
  flex: 2; 
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PersonalInfoSection = styled.section`
  margin-bottom: 20px;
`;

export const AccountInfoSection = styled.section`
  margin-bottom: 20px;
`;
export const ProfileInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:hover &:focus-visible {
  border-color: #007bff;
  }
  
`;

export const ProfileImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 20px auto;
`;

export const ProfileHeading = styled.h2`
  text-align: center;
  margin: 20px 0;
  color: #1a1a1a;
`;

export const ProfileSection = styled.section`
  margin-bottom: 30px;
`;

export const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ProfileField = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #555;
  margin-bottom: 5px;
`;

export const ProfileValue = styled.span`
  display: block;
  color: #000;
  font-size: 1.2rem;
`;
export const FieldRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

export const EditButton = styled.button`
  display: block;
  margin: auto;
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }
`;

export const EditButtonContainer = styled.div`
  display: flex;
  justify-content: ${({isEditMode}) => isEditMode ? 'space-between' : 'flex-end'};
  padding: 10px 0;
`;
