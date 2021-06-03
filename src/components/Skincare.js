import React from "react";
import "../styles/Skincare.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import photo from "../assets/johnson/skinphoto.jpg";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function Skincare() {
  const useStyles = makeStyles(() => ({
    font: {
      fontFamily: "ShortBaby-Mg2w",
    },
    fontCont: {
      marginTop: "5vh",
      fontWeight: "500",
      display: "flex",
      flexDirection: "start",
      alignItems: "center",
    },
  }));

  const classes = useStyles();
  return (
    <div className="Skincare">
      <div>
        <Typography className={classes.font} variant="h4" component="h4">
          Skincare is more than beauty...
        </Typography>

        <Typography className={classes.fontCont} variant="h5" component="h5">
          <CheckCircleOutlineIcon Size="17px" style={{ marginRight: "10px" }} />
          Every skincare product you use is because of one <br />
          primal instinct we do not think of consciousely.
        </Typography>

        <Typography className={classes.fontCont} variant="h5" component="h5">
          <CheckCircleOutlineIcon Size="17px" style={{ marginRight: "10px" }} />
          While different skin tones need attention that others <br />
          may not need, we are all human. Through all of <br />
          the genetic variation - we are one.
        </Typography>

        <Typography className={classes.fontCont} variant="h5" component="h5">
          <CheckCircleOutlineIcon Size="17px" style={{ marginRight: "10px" }} />
          When supporting johnson & sonthixay Skincare, you are <br />
          acknowledging that no one person is better than <br />
          the other. No one race is better than <br />
          the other - we are all humans.
        </Typography>
      </div>
      <div className="Skincare-photo">
        <img className="Photo" src={photo} alt="image will be available soon..." />
      </div>
    </div>
  );
}

export default Skincare;
