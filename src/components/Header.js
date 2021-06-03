import React from "react";
import "../styles/Header.css";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import teslalogo from "../assets/teslaLogo.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      justifyContent: "space-around",
    },
    menuButton: {
      marginRight: theme.spacing(1),
    },
    come: {
      marginLeft: "1.3vw",
      marginRight: "1.3vw",
    },
  }));

  const classes = useStyles();

  const width = window.innerWidth;
  const breakpoint_mobile = 425;
  const breakpoint_tablet = 768;

  return (
    <div>
      <AppBar position="absolute" color="transparent">
        {width > breakpoint_mobile ? (
          <Toolbar className={classes.root} variant="dense">
            <p>Johnson & Sonthiaxay</p>
            <div className="Comselection">
              <Typography className={classes.come}>
                Galactic SkinCare
              </Typography>
              <Typography className={classes.come}>SuaveMedia</Typography>
              <Typography className={classes.come}>Flippy</Typography>
              <Typography className={classes.come}>CoisElectronics</Typography>
            </div>
            <p>hello</p>
          </Toolbar>
        ) : (
          <Toolbar className={classes.root} variant="dense">
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MailIcon />
            </IconButton>
            <Typography>Johnson & Sonthiaxay</Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}

export default Header;
