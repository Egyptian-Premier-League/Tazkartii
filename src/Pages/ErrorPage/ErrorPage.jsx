import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from 'Assets/Images/error.png';
import { ErrorContainer, ErrorTitle, ErrorImage, ErrorMessage, HomeLink } from './ErrorPage.styled';

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorTitle>Oops! Something went wrong.</ErrorTitle>
            <ErrorImage src={errorImage} alt="Error" />
            <ErrorMessage>Please try again later.</ErrorMessage>
            <HomeLink to="/">Go back to home</HomeLink>
        </ErrorContainer>
    );
};

export default ErrorPage;
