import styled from "styled-components";
import Button from "@mui/material/Button";

export const ImageButton = styled(Button)`
  
  background-image: ${({ imageUrl }) => imageUrl ? `url(${imageUrl})` : 'none'};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: ${({ imageUrl }) => imageUrl ? 'none' : '1px dashed grey'};
  cursor: ${({ imageUrl }) => imageUrl ? 'default' : 'pointer'};
  &:hover {
    background-color: ${({ imageUrl }) => imageUrl ? 'transparent' : 'rgba(0, 0, 0, 0.1)'};
  }
  width: 100px;
  height: 100px;
`;

export const Input = styled.input`
  display: none; 
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-flex; // Align label text and button
  align-items: center;
  gap: 10px; // Space between text and button
  padding: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;
