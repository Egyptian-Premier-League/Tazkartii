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
  SpliteDigit,
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

  const [cardPart1, setCardPart1] = useState("");
  const [cardPart2, setCardPart2] = useState("");
  const [cardPart3, setCardPart3] = useState("");
  const [cardPart4, setCardPart4] = useState("");

  const validateForm = () => {
    let isValid = true;
    const cardNumber = `${cardPart1}${cardPart2}${cardPart3}${cardPart4}`;

    if (!/^\d{4}$/.test(cardPart1) || !/^\d{4}$/.test(cardPart2) || !/^\d{4}$/.test(cardPart3) || !/^\d{4}$/.test(cardPart4)) {
      setCardError("Each part of the credit card number must be 4 digits.");
      isValid = false;
    } else if (!/^\d{16}$/.test(cardNumber)) {
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
      // console.log("Payload: ", parsedPayload);
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
          <SpliteDigit>
            <StyledInput type="text" maxLength="4" value={cardPart1} onChange={(e) => setCardPart1(e.target.value)} required />
            <StyledInput type="text" maxLength="4" value={cardPart2} onChange={(e) => setCardPart2(e.target.value)} required />
            <StyledInput type="text" maxLength="4" value={cardPart3} onChange={(e) => setCardPart3(e.target.value)} required />
            <StyledInput type="text" maxLength="4" value={cardPart4} onChange={(e) => setCardPart4(e.target.value)} required />
          </SpliteDigit>
        </FormLabel>
        {cardError && (
          <ErrorMessage>
            <span>❗</span>
            {cardError}
          </ErrorMessage>
        )}

        <FormLabel>
          PIN Number:
          <StyledInput type="password" value={pinNumber} maxLength="4" onChange={(e) => setPinNumber(e.target.value)} required />
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
