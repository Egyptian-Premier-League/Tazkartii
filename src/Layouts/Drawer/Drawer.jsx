import React from "react";
import { Drawer as MUIDrawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

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
