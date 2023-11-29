import React, { useContext, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import CopyRight from "Components/CopyRight/CopyRight";
import { useNavigate } from "react-router-dom";

import AuthContext from "Contexts/Auth-Context";
import useFetchFunction from "Hooks/useFetchFunction";
import signup from "Services/Authentication/Signup";

const roles = [
  { value: "manager", label: "Manager" },
  { value: "fan", label: "Fan" },
];

const SignUp = () => {
  const [data, error, isLoading, dataFetch] = useFetchFunction();

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
  const navigate = useNavigate();

  const auth = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateData) {
      signup(dataFetch, {
        username,
        firstName,
        lastName,
        email,
        password,
        birthDate,
        gender,
        city,
        address,
        role,
      });
    }

    console.log({
      username,
      firstName,
      lastName,
      email,
      password,
      birthDate,
      gender,
      city,
      address,
      role,
    });
    auth.loginUser();
    navigate("/");
  };

  const validateData = () => {
    const isUsernameValid = username.trim() !== "";
    const isFirstNameValid = firstName.trim() !== "";
    const isLastNameValid = lastName.trim() !== "";
    const isEmailValid = email.trim() !== "";
    const isPasswordValid = password.trim() !== "";
    const isBirthDateValid = birthDate.trim() !== "";
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
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ marginTop: "10px" }}>
          Register
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                select
                label="Gender"
                fullWidth
                name="gender"
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
                fullWidth
                id="city"
                label="City"
                name="city"
              />
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={(e) => handleSubmit(e)}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <CopyRight sx={{ mt: 3, mb: 2 }} />
    </Container>
  );
};

export default SignUp;
