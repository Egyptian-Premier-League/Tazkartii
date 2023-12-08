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
import LeagueStandings from "Components/LeagueStandings/LeagueStandings";
import Stadium from "Components/Stadium/Stadium";
import PaymentForm from "Components/PaymentForm/PaymentForm";
import Tickets from "Pages/Ticket/Tickets";
import MatchEventForm from "Components/MatchEventForm/MatchEventForm";
import AddStadiumForm from "Components/AddStadiumForm/AddStadiumForm";
import Drawer from "Layouts/Drawer/Drawer";

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
          <Drawer  />
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
              path="/reservation"
              element={
                <RequireAuth>
                  <Stadium rows={8} cols={15} />
                </RequireAuth>
              }
            />
            {/* <Route path=":userId" element={<PaymentForm />} /> */}

            <Route
              path="/payment"
              element={
                <RequireAuth>
                  <PaymentForm />
                </RequireAuth>
              }
            />

            <Route path="/standings" element={<LeagueStandings />} />
            <Route
              path="/tickets"
              element={
                <RequireAuth>
                  <Tickets />
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
            <Route path="/add-match" element={<MatchEventForm />} />
            <Route path="/add-stadium" element={<AddStadiumForm />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
