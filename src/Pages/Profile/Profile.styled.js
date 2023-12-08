import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
  margin-bottom: 120px;
  margin-top: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const PhotoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px;

  @media (min-width: 768px) {
    justify-content: flex-start;
    flex: 1;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex: 2;
  }
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
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
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
  justify-content: ${({ isEditMode }) => (isEditMode ? "space-between" : "flex-end")};
  padding: 10px 0;
`;

export const StatusCardContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 100%;
  max-width: 300px;
  margin: auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`;

export const StatusTitle = styled.h2`
  color: #333;
  margin-top: 10px;
`;

export const StatusText = styled.p`
  color: #666;
  font-size: 1rem;
`;

export const StatusButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1rem;
  width: 100%; // Makes the button stretch to the full width of the card
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #367c39;
  }
`;

export const StatusLogo = styled.img`
  width: 50px; // Set a fixed width for the logo
  height: auto; // Ensure the aspect ratio is maintained
  margin-top: 20px; // Add some space above the logo
`;
