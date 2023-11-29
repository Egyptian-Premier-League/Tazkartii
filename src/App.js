import "./App.css";
// Import react and hooks
import React, { useState } from "react";
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


function App() {
  const [editMode, setEditMode] = useState(false);

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
      <Router>
        <div className="App">
          <Navigation toggleColorMode={handleToggleTheme} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
          {/* <ConfirmModal open={}  /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
