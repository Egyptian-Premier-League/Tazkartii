import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  overflow-y: auto;
`;
export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 50%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
`;
export const CloseButton = styled.button`
  background: #f44336;
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 16px;
  cursor: pointer;
  padding: 0 10px;
  line-height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;
export const Label = styled.label`
  font-size: 1rem;
  color: #333;
`;
export const SubmitButton = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
