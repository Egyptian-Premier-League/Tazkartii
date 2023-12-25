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
import { ErrorMsg, ProgressContainer, ContainerLogin, BoxContainer, BackgroundContainer } from "./Login.styled";

const SignIn = () => {
  const [userData, error, isLoading, dataFetch] = useFetchFunction();
  const auth = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [errorKey, setErrorKey] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Clear any previous error messages
    setErrorKey((prevKey) => prevKey + 1);

    setErrorMessage("");

    // Start the login process
    login(dataFetch, { username, password });
  };

  useEffect(() => {
    if (error) {
      setErrorMessage(`Wrong username or password. Attempt: ${errorKey}`);
    } else if (userData && userData.accessToken) {
      auth.loginUser(username, userData.role, userData.accessToken, userData.approved);
      navigate("/");
    }
  }, [userData, error, auth, navigate, username, errorKey]);

  return (
    <BackgroundContainer>
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
            <ErrorMsg key={errorKey}>{errorMessage}</ErrorMsg>
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
    </BackgroundContainer>
  );
};

export default SignIn;
