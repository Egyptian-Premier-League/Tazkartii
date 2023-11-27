import styled from 'styled-components';

export const ProfileContainer = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background: #fff;
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
  margin-bottom: 15px;
`;

export const ProfileField = styled.span`
  display: block;
  color: #555;
  margin-bottom: 5px;
`;

export const ProfileValue = styled.span`
  display: block;
  color: #000;
  font-size: 1.2rem;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 20px auto;
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
