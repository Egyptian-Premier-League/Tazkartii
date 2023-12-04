import React from "react";
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Typography from "@mui/material/Typography";

const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <MUIDrawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      <List>
        {/* Link to Home */}
        <ListItem component={Link} to="/" onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Link to About */}
        <ListItem component={Link} to="/about" onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        {/* Link to Contact */}
        <ListItem component={Link} to="/contact" onClick={toggleDrawer(false)}>
          <ListItemIcon>
            <ContactMailIcon />
          </ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </MUIDrawer>
  );
};

export default Drawer;

// const [drawerOpen, setDrawerOpen] = useState(false);

// const toggleDrawer = (open) => (event) => {
//   if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
//     return;
//   }
//   setDrawerOpen(open);
// };
// {
/* <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            My App
          </Typography>
        </Toolbar>
      </AppBar> */
// }

// {
//   /* <Drawer isOpen={drawerOpen} toggleDrawer={toggleDrawer} /> */
// }
