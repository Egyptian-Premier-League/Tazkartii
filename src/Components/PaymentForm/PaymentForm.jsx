import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormContainer, StyledForm, FormLabel, StyledInput, SubmitButton, FormHeader, SponsorLogo } from "./PaymentForm.styled";

import sponsorLogo1 from "Assets/Images/mastercard.jpg";
import sponsorLogo2 from "Assets/Images/paypal.png";

const PaymentForm = () => {
  const navigate = useNavigate();
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [pinNumber, setPinNumber] = useState("");

  const handleSubmit = (e) => {
    console.log("creditCardNumber", creditCardNumber);
    e.preventDefault();
    alert("Payment confirmed successfully.");
    navigate("/tickets");
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
            type="number"
            value={creditCardNumber}
            pattern="[0-9]+"
            maxLength={16}
            minLength={16}
            title="Please enter a valid credit card number (digits only)"
            onChange={(e) => setCreditCardNumber(e.target.value)}
            required
          />
        </FormLabel>
        <FormLabel>
          PIN Number:
          <StyledInput
            type="password"
            maxLength={6}
            minLength={4}
            value={pinNumber}
            onChange={(e) => setPinNumber(e.target.value)}
            required
          />
        </FormLabel>
        <SubmitButton type="submit">Confirm Payment</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PaymentForm;
