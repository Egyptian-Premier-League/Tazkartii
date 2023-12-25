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

  // States for individual error messages
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [birthDateError, setBirthDateError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [cityError, setCityError] = useState("");
  const [roleError, setRoleError] = useState("");

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
    // Reset error messages
    setUsernameError("");
    setPasswordError("");
    setEmailError("");
    setBirthDateError("");
    setGenderError("");
    setCityError("");
    setRoleError("");

    let isValid = true;

    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      setUsernameError("Invalid username.");
      isValid = false;
    }

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError("Invalid password. Should contain upper and lower case, digits and alpha.");
      isValid = false;
    }
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!gender) {
      setGenderError("Enter a gender");
      isValid = false;
    } else setGenderError("");

    if (!birthDate) {
      setBirthDateError("Choose a birthdate");
      isValid = false;
    } else setBirthDateError("");

    if (!role) {
      setRoleError("Choose a role");
      isValid = false;
    } else setRoleError("");

    if (!city) {
      setCityError("Choose city");
      isValid = false;
    } else setCityError("");

    return isValid;
  };

  return (
    <BackgroundContainer>
      <SignUpContainer maxWidth="xs">
        {errorMessage && <ErrorMsg>{errorMessage}</ErrorMsg>}

        <BoxContainer>
          <Typography component="h1" variant="h5" sx={{ marginTop: "10px" }}>
            Register
          </Typography>
          <BoxContainer component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  error={!!usernameError}
                  helperText={usernameError}
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
                  error={!!emailError}
                  helperText={emailError}
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
                  error={!!passwordError}
                  helperText={passwordError}
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
                  error={!!birthDateError}
                  helperText={birthDateError}
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
                  error={!!genderError}
                  helperText={genderError}
                  label="Gender"
                  fullWidth
                  name="gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={city}
                  error={!!cityError}
                  helperText={cityError}
                  onChange={handleCityChange}
                  required
                  select
                  fullWidth
                  id="city"
                  label="City"
                  name="city"
                >
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
                  error={!!roleError}
                  helperText={roleError}
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
