import React, { useState, useEffect } from "react";
import formatBirthDate from "Utils/FormatDate";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import CopyRight from "Components/CopyRight/CopyRight";
import { useNavigate } from "react-router-dom";
import { useAuth } from "Contexts/Auth-Context";
import useFetchFunction from "Hooks/useFetchFunction";
import signup from "Services/Authentication/Signup";
import getCities from "Services/General/GetCities";
import Progress from "Components/Progress/Progress";

// stylesd components
import { ErrorMsg, ProgressContainer, SignUpContainer, BoxContainer, BackgroundContainer } from "./SignUp.styled";

const roles = [
  { value: "Manager", label: "Manager" },
  { value: "Fan", label: "Fan" },
];

const SignUp = () => {
  // Fetching data from the backend
  const [userData, error, isLoading, dataFetch] = useFetchFunction();
  const [citiesData, errorOfCities, isLoadingCity, cityDataFetch] = useFetchFunction();

  // States for all the fields
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [cityOptions, setCityOptions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const auth = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateData()) {
      return;
    }

    signup(dataFetch, {
      username,
      firstName,
      lastName,
      email,
      password,
      confirmPassword: password,
      birthdate: birthDate,
      gender,
      city,
      address,
      role,
    });
  };
  useEffect(() => {
    getCities(cityDataFetch);
  }, []);

  useEffect(() => {
    if (citiesData) {
      const formattedCities = citiesData.map((cityName) => ({
        value: cityName,
        label: cityName,
      }));
      setCityOptions(formattedCities);
    }
  }, [citiesData]);
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  useEffect(() => {
    if (error) {
      setErrorMessage("Username or Email are in use");
    } else if (userData && userData.accessToken) {
      auth.loginUser(username, userData.role, userData.accessToken, userData.approved);
      navigate("/");
    }
  }, [userData, error, auth, navigate, username]);

  const validateData = () => {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    const isUsernameValid = usernameRegex.test(username);
    const isPasswordValid = passwordRegex.test(password);

    if (!isUsernameValid) {
      setErrorMessage("Username is not valid. Only alphanumeric and underscores are allowed.");
      return false;
    }

    if (!isPasswordValid) {
      setErrorMessage(
        "Password is not valid. It must contain at least 8 characters, including one letter, one number, and one special character."
      );
      return false;
    }
    if (city === "") {
      setErrorMessage("Please choose a city");
      return false;
    }
    if (role === "") {
      setErrorMessage("Please choose a role");
      return false;
    }
    if (!birthDate) {
      setErrorMessage("Please choose a birth date");
      return false;
    }
    if (gender === "") {
      setErrorMessage("Please enter your gender");
      return false;
    }

    const isFirstNameValid = firstName.trim() !== "";
    const isLastNameValid = lastName.trim() !== "";
    const isEmailValid = email.trim() !== "";
    const isBirthDateValid = formatBirthDate(birthDate);
    const isGenderValid = gender.trim() !== "";
    const isCityValid = city.trim() !== "";
    const isRoleValid = role.trim() !== "";

    return (
      isUsernameValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isBirthDateValid &&
      isGenderValid &&
      isCityValid &&
      isRoleValid
    );
  };

  return (
    <BackgroundContainer>
      <SignUpContainer maxWidth="xs">
        {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}

        <BoxContainer>
          <Typography component="h1" variant="h5" sx={{ marginTop: "10px" }}>
            Register
          </Typography>
          <BoxContainer component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  id="birthDate"
                  label="Birth Date"
                  required
                  type="date"
                  fullWidth
                  name="birthDate"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  id="gender"
                  required
                  select
                  label="Gender"
                  fullWidth
                  name="gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField value={city} onChange={handleCityChange} required select fullWidth id="city" label="City" name="city">
                  {cityOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  fullWidth
                  id="address"
                  label="Address"
                  name="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="role"
                  select
                  required
                  label="Role"
                  fullWidth
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  {roles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            {isLoading ? (
              <ProgressContainer>
                {" "}
                <Progress />
              </ProgressContainer>
            ) : (
              <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={(e) => handleSubmit(e)}>
                Sign Up
              </Button>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </BoxContainer>
        </BoxContainer>
        <CopyRight sx={{ mt: 3, mb: 2 }} />
      </SignUpContainer>
    </BackgroundContainer>
  );
};

export default SignUp;
