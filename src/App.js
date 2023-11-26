import "./App.css";
// Import react and hooks
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

// Import themes
import darkTheme from "Theme/darkTheme";
import defaultTheme from "Theme/defaultTheme";
import lightTheme from "Theme/lightTheme";

// Imports
import HomePage from "Pages/HomePage";
import Navigation from "Layouts/Navigation";
import useLocalStorage from "Hooks/useLocalStorage";

function App() {
  // State to store the current theme of the website
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
      <div className="App">
        <Navigation toggleColorMode={handleToggleTheme} />
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
