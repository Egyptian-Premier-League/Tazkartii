import React, { useState } from "react";
import { FormContainer, StyledForm, FormLabel, StyledInput, SubmitButton } from "./PaymentForm.styled";

const PaymentForm = ({ onConfirmPayment }) => {
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [pinNumber, setPinNumber] = useState("");

  const handleSubmit = (e) => {
    console.log("creditCardNumber", creditCardNumber);
    e.preventDefault();
    // onConfirmPayment(creditCardNumber, pinNumber);
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel>
          Credit Card Number:
          <StyledInput
            type="text"
            value={creditCardNumber}
            pattern="[0-9]+"
            title="Please enter a valid credit card number (digits only)"
            onChange={(e) => setCreditCardNumber(e.target.value)}
            required
          />
        </FormLabel>
        <FormLabel>
          PIN Number:
          <StyledInput type="password" value={pinNumber} onChange={(e) => setPinNumber(e.target.value)} required />
        </FormLabel>
        <SubmitButton type="submit">Confirm Payment</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PaymentForm;
