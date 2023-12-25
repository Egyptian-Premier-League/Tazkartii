import styled from "styled-components";

export const FormContainer = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  box-sizing: border-box;
`;
export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;

export const SponsorLogo = styled.img`
  height: 50px;
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormLabel = styled.label`
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const StyledInput = styled.input`
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
  outline-color: #007bff;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 15px;
  border-radius: 6px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ErrorMessage = styled.p`
  color: #d32f2f;
  background-color: #fdecea;
  border-left: 5px solid #d32f2f;
  padding: 10px 20px;
  border-radius: 4px;
  margin: 10px 0;
  font-size: 0.9rem;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  svg {
    margin-right: 8px;
  }
`;
