import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  height: auto;
  margin-bottom: 120px;
  margin-top: 30px;
`;

export const FormHeading = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

export const FormField = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
`;

export const TextInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: block;
  width: 30%;
  align-items: center;
  text-align: center;
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f7f7f7;
  cursor: pointer;
  &:hover {
    background-color: #e7e7e7;
  }
`;

export const PreviewImage = styled.img`
  width: 50%;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const EditButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 16px;
`;
