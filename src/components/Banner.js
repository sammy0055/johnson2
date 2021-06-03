import React from "react";
import "../styles/Banner.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Banner() {
  const useStyles = makeStyles((theme) => ({
    root: {
      fontFamily: "MickCaster",
    },
    font: {
      fontFamily: "Mick-Caster-Italic",
      //   color: "white",
    },
    Btn: {
      "& > *": {
        margin: theme.spacing(2),
      },

      Btns: {
        display: "flex",
      },
      BannerBotom: {
        display: "flex",
        flexDirections: "row",
        justifyContent: "space-around",
        fontFamily: "MickCaster",
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <div className="Banner0">
        <div className="BannerTop">
          <Typography className={classes.root} variant="h1" component="h1">
            Johnson & Sonthiaxay
          </Typography>
          <Typography className={classes.font} variant="h4" component="h2">
            Find The Perfect Service Ranging from Real Estate Investment,
            <br /> SkinCare & Wellness Service, Media/Communications
            <br /> And Consumer Electromics On Our Platform.{" "}
          </Typography>
          <div className={classes.Btn}>
            <Button variant="outlined" color="default">
              Real Estate
            </Button>
            <Button variant="outlined" color="default">
              CoisElectronics
            </Button>
            <Button variant="outlined" color="default">
              SkinCare
            </Button>
            <Button variant="outlined" color="default">
              Media/Comms
            </Button>
          </div>
        </div>
      </div>

      <div className="BannerBotom">
        <Typography className={classes.root} variant="h4" component="h3">
          CoisElectronics
        </Typography>
        <Typography className={classes.root} variant="h4" component="h3">
          Galactic SkinCare
        </Typography>
        <Typography className={classes.root} variant="h4" component="h3">
          Flippy
        </Typography>
        <Typography className={classes.root} variant="h4" component="h3">
          Media & Comms
        </Typography>
      </div>
    </>
  );
}

export default Banner;
