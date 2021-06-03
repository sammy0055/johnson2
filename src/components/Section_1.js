import React from "react";
import "../styles/Section_1.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "./Box";

function Section_1() {
  const useStyles = makeStyles(() => ({
    mission: {
      fontFamily: "Cambria Math",
      marginBottom: "5px",
    },
  }));

  const classes = useStyles();
  return (
    <div className="Sec">
      .
      <div className="Section1">
        <Typography className={classes.mission} variant="h3" component="h3">
          Our Mission
        </Typography>
        <Typography variant="p" component="p">
          Johnson & sonthixay takes the guesswork out of the your dietary
          regimen. With certified organic groceries, world-class vitamins and
          supplyments, and the ability to subscribe to our meal-prep options, we
          give everyday people unpreecedented access to healthy living. We
          provide skincare products that can protect humans experiencing
          prolonged exposure in environments with high levels of radiation, and
          preserve thier skin.
        </Typography>
      </div>
      <Box />
    </div>
  );
}

export default Section_1;
