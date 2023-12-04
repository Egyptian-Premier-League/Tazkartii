import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CopyRight from "Components/CopyRight/CopyRight";

import { useAuth } from "Contexts/Auth-Context";
import { useNavigate } from "react-router-dom";

import useFetchFunction from "Hooks/useFetchFunction";
import login from "Services/Authentication/Login";
import Progress from "Components/Progress/Progress";
import { ErrorMsg, ProgressContainer, ContainerLogin, BoxContainer } from "./Login.styled";

const SignIn = () => {
  const [userData, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      console.log("User Data: ", userData);
    }
  }, [userData]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const badRequestMsg = "Wrong username and password";

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear any previous error messages
    setErrorMessage("");

    if (!validateData()) return;

    // Start the login process
    login(dataFetch, { username, password });
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(badRequestMsg);
    } else if (userData && userData.accessToken) {
      auth.loginUser(username, userData.role, userData.accessToken);
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
    if (isPasswordValid) {
      setErrorMessage(
        "Password is not valid. It must contain at least 8 characters, including one letter, one number, and one special character."
      );
      return false;
    }

    return true;
  };

  return (
    <ContainerLogin component="main" maxWidth="xs">
      <BoxContainer>
        <Typography component="h1" variant="h5" sx={{ marginTop: "15px" }}>
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="User Name"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          {isLoading ? (
            <ProgressContainer>
              <Progress />
            </ProgressContainer>
          ) : (
            <Button fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={(e) => handleSubmit(e)}>
              Sign In
            </Button>
          )}
          <ErrorMsg>{errorMessage}</ErrorMsg>
          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </BoxContainer>
      <CopyRight sx={{ mt: 8, mb: 4 }} />
    </ContainerLogin>
  );
};

export default SignIn;
