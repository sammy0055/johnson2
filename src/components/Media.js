import React from "react";
import "../styles/Media.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

function Media() {
  const useStyles = makeStyles(() => ({
    font: {
      fontFamily: "ShortBaby-Mg2w",
      textAlign: "center",
      marginBottom: "5vh",
    },
  }));

  const classes = useStyles();
  return (
    <div className="Media">
      <Typography className={classes.font} variant="h4" component="h4">
        Media & Communications
      </Typography>
      <div className="BoxCont">
        <div className="Box1">
          <p>hllo div</p>
        </div>
        <div className="Box1">
          <p>hllo div</p>
        </div>
      </div>

      <div className="BoxCont">
        <div className="Box1">
          <p>hllo div</p>
        </div>
        <div className="Box1">
          <p>hllo div</p>
        </div>
      </div>
    </div>
  );
}

export default Media;
