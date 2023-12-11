import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  background: linear-gradient(145deg, #f5f5f5, #ffffff);
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6);
  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  border: 1px solid #e0e0e0;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  cursor: pointer;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.1rem;
  outline-color: #007bff;
  transition: border-color 0.25s ease-in-out;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1.1rem;
  outline-color: #007bff;
  background-color: #fff;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8, ...");
  background-repeat: no-repeat;
  background-position: right 15px center;
  transition: border-color 0.25s ease-in-out;
  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

export const Button = styled.button`
  padding: 15px 25px;
  border: none;
  border-radius: 10px;
  background-color: #007bff;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #0056b3;
  }
  &:not(:first-child) {
    background-color: transparent;
    color: #007bff;
    border: 1px solid #007bff;
  }
`;

export const FormTitle = styled.h2`
  color: #333;
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
`;

export const Label = styled.label`
  width: 100%;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 8px;
  text-align: left;
  font-weight: 500;
  & div {
    margin-bottom: 8px;
  }
`;
