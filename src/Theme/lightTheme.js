/**
 * light theme colors
 *
 * @type {{id:string}}
 */
// Define the light theme properties
const lightTheme = {
  id: "light",
  color: {
    primary: "#61dafb", // Primary text color
    clubName: "#1a237e", // Club name text color
    brand: "#0077b5", // Brand color for logos or highlights
    danger: "#dc3545", // Danger color for errors
    warning: "#ffc107", // Warning color for alerts
    success: "#28a745", // Success color for success messages
    info: "#17a2b8", // Info color for information messages
    white: "#ffffff", // White color
    black: "#000000", // Black color
    disabled: "#666666", // Text color for disabled buttons
  },
  background: {
    primary: "#ffffff", // Main background color
    hoverOfNav: "#f2f2f2", // Background color for navbar hover
    hoverOfCell: "#e0e0e0", // Background color for table cell hover
  },
  header: {
    background: "#f7f7f7", // Light theme header background
    color: "#333", // Light theme header text color
  },
  borderColor: {
    primary: "#878a8c", // Main border color
  },
  lineColor: {
    primary: "#edeff1", // Main line color
    secondary: "#e0e0e0", // Secondary line color
  },
  button: {
    primary: "#0079d3", // Main button color
    secondary: "#f0f0f0", // Secondary button color (possibly for hover state)
    hover: "#0056b3", // Button hover state color
    disabled: "#cccccc", // Button disabled state color
  },
};

// Export the themes
export default lightTheme;
