import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  border: 2px solid #007bff;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #0056b3;
    box-shadow: 0 0 0 2px rgba(0, 86, 179, 0.2);
  }
`;

export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

// Feel free to add more styled components for other elements if needed
