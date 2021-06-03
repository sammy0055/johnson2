import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import banner1 from "../assets/johnson/banner1.jpg";

function Box() {
  const useStyles = makeStyles(() => ({
    box: {
      marginTop: "7%",
      marginLeft: "5%",
      marginRight: "5%",
      height: "26vw",
      borderRadius: "5px",
      backgroundColor: "blue",
      backgroundImage: `url(${banner1})`,
      backgroundSize: "cover",
    },
  }));

  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Typography variant="p" component="p">
        hello box
      </Typography>
    </div>
  );
}

export default Box;
