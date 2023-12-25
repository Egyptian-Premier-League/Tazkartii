import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetchFunction from "Hooks/useFetchFunction";
import { useAuth } from "Contexts/Auth-Context";
import reserveSeat from "Services/General/ReserveSeat";

import {
  FormContainer,
  StyledForm,
  FormLabel,
  StyledInput,
  SubmitButton,
  FormHeader,
  SponsorLogo,
  ErrorMessage,
} from "./PaymentForm.styled";

import sponsorLogo1 from "Assets/Images/mastercard.jpg";
import sponsorLogo2 from "Assets/Images/paypal.png";

const PaymentForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  const [stadiumData, error, isLoading, dataFetch] = useFetchFunction();

  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [pinNumber, setPinNumber] = useState("");
  const [cardError, setCardError] = useState("");
  const [pinError, setPinError] = useState("");
  const [payloadSeats, setPayloadSeats] = useState({});

  const validateForm = () => {
    let isValid = true;
    if (!/^\d{16}$/.test(creditCardNumber)) {
      setCardError("Credit card number must be 16 digits.");
      isValid = false;
    } else {
      setCardError("");
    }

    if (!/^\d{4}$/.test(pinNumber)) {
      setPinError("PIN must be 4 digits.");
      isValid = false;
    } else {
      setPinError("");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    console.log("creditCardNumber", creditCardNumber);
    e.preventDefault();

    if (!validateForm()) return;

    reserveSeat(dataFetch, auth, payloadSeats);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const payload = queryParams.get("payload");

    if (payload) {
      const parsedPayload = JSON.parse(decodeURIComponent(payload));
      console.log("Payload: ", parsedPayload);
      setPayloadSeats(parsedPayload);
    }
  }, []);

  useEffect(() => {
    let finalMsg = "";
    let reservedSeat = false;
    if (error) return;
    else if (stadiumData && stadiumData.length > 0) {
      stadiumData?.forEach((seat) => {
        if (seat?.error) {
          finalMsg += `⛔Seat with Row: ${seat.seatRow} & Number: ${seat.seatNumber} is Reserved Before⛔\n`;
        } else {
          finalMsg += `Seat with Row: ${seat.seatRow} & Number: ${seat.seatNumber} is Reserved Successfully ❤\n`;
          reservedSeat = true;
        }
      });
      alert(finalMsg);
      if (reservedSeat) navigate(`/tickets`);
      else navigate("/matches");
    }
  }, [stadiumData, error]);

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
        {cardError && (
          <ErrorMessage>
            <span>❗</span>
            {cardError}
          </ErrorMessage>
        )}

        <FormLabel>
          PIN Number:
          <StyledInput type="password" value={pinNumber} onChange={(e) => setPinNumber(e.target.value)} required />
        </FormLabel>
        {pinError && (
          <ErrorMessage>
            <span>❗</span>
            {pinError}
          </ErrorMessage>
        )}

        <SubmitButton type="submit">Confirm Payment</SubmitButton>
      </StyledForm>
    </FormContainer>
  );
};

export default PaymentForm;
