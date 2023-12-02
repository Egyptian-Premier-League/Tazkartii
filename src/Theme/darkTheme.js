/**
 * dark theme colors
 *
 * @type {{id:string}}
 */
// Define the dark theme properties
const darkTheme = {
  id: "dark",
  color: {
    primary: "#ffffff", // Text color for primary content
    clubName: "#e0e0ff", // Club name text color
    brand: "#55acee", // Brand color for logos or highlights
    danger: "#dc3545", // Danger color for errors
    warning: "#ffc107", // Warning color for alerts
    success: "#28a745", // Success color for success messages
    info: "#17a2b8", // Info color for information messages
    white: "#ffffff", // White color
    black: "#000000", // Black color
  },
  background: {
    primary: "#121212", // Main background color
    hoverOfNav: "#e0e0e0", // Background color for navbar hover
    hoverOfCell: "#424242", // Background color for table cell hover
  },
  header: {
    background: "#1a1a1a", // Dark theme header background
    color: "#f1f1f1", // Dark theme header text color
  },
  borderColor: {
    primary: "#444444", // Main border color
  },
  lineColor: {
    primary: "#333333", // Main line color
  },
  button: {
    primary: "#0a84ff", // Main button color
    secondary: "#333333", // Secondary button color (possibly for hover state)
  },
};

export default darkTheme;
