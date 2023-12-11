import React, { useState } from "react";
import { FormContainer, StyledForm, FormLabel, StyledInput, SubmitButton, FormHeader, SponsorLogo } from "./PaymentForm.styled";

import sponsorLogo1 from "Assets/Images/mastercard.jpg";
import sponsorLogo2 from "Assets/Images/paypal.png";

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
      <FormHeader>
        <SponsorLogo src={sponsorLogo1} alt="mastercard" />
        <h2>Secure Payment</h2>
        <SponsorLogo src={sponsorLogo2} alt="paypal" />
      </FormHeader>
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