// Import react and hooks
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Imports
import HomePage from "Pages/HomePage/HomePage";
import Navigation from "Layouts/Navigation/Navigation";
import useLocalStorage from "Hooks/useLocalStorage";
import SignUp from "Pages/SignUp/SignUp";
import SignIn from "Pages/Login/Login";
import Admin from "Pages/Admin/Admin";
import Profile from "Pages/Profile/Profile";
import ErrorPage from "Pages/ErrorPage/ErrorPage";
import MatchSchedule from "Layouts/MatchSchedule/MatchSchedule";

// Protected Routes
import RequireAuth from "Contexts/RequireAuth";
import { AuthContextProvider } from "Contexts/Auth-Context";
import Footer from "Layouts/Footer/Footer";

function App() {
  const [theme, setTheme] = useLocalStorage(
    "theme",
    JSON.stringify({
      ...defaultTheme,
      ...lightTheme,
    })
  );

  const handleToggleTheme = () => {
    if (JSON.parse(theme).id === "dark") {
      setTheme(
        JSON.stringify({
          ...defaultTheme,
          ...lightTheme,
        })
      );
    } else {
      setTheme(
        JSON.stringify({
          ...defaultTheme,
          ...darkTheme,
        })
      );
    }
  };
  return (
    <ThemeProvider theme={JSON.parse(theme)}>
      <AuthContextProvider>
        <Router>
          <Navigation toggleColorMode={handleToggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route
              path="/admin"
              element={
                <RequireAuth>
                  <Admin />
                </RequireAuth>
              }
            />
            <Route path="/matches" element={<MatchSchedule />} />
            <Route
              path="/tickets"
              element={
                <RequireAuth>
                  <h1>My Tickets</h1>
                </RequireAuth>
              }
            />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
